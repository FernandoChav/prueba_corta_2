import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CharacterService } from '../../services/character.service';
import { ResponseAPICharacter } from '../../interfaces/ResponseAPICharacter';

@Component({
  selector: 'character-page-home',
  standalone: true,
  imports: [ButtonComponent],
  providers: [CharacterService],
  templateUrl: './characters-home.component.html',
  styleUrl: './characters-home.component.css'
})
export class CharactersHomeComponent {
  private characterService = inject(CharacterService);
  characters:  any[] = [];
  constructor() { 
    this.getCharacters();
  }
  getCharacters(){
    this.characterService.getCharacters().then((response) => {
      this.characters = response.results;
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
}
