import { Component, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  providers: [CharacterService],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  private characterService = inject(CharacterService);
  constructor() { }

  searchCharacter(name: string){
    this.characterService.getCharacterByName(name).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
}
