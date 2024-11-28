import { Component, inject,Input,Output } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CharacterService } from '../../services/character.service';
import { ResponseAPICharacter } from '../../interfaces/ResponseAPICharacter';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'character-page-home',
  standalone: true,
  imports: [ButtonComponent,CardComponent],
  providers: [CharacterService],
  templateUrl: './characters-home.component.html',
  styleUrl: './characters-home.component.css'
})
export class CharactersHomeComponent {
  private characterService = inject(CharacterService);
  characters:  any[] = [];
  @Input() page : number = 1;
  maxPage: number = 0;
  constructor() { 
    this.getCharacters();
    this.getMaxPage();
  }
  getCharacters(){
    this.characterService.getCharacters().then((response) => {
      this.characters = response.results;
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
  getCharactersByPage(page: number){
    
    this.characterService.getCharactersByPage(page).then((response) => {
      this.characters = response.results;
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
  getMaxPage(){
    this.characterService.getCharacters().then((response) => {
      this.maxPage = response.info.pages;
      
      
    }).catch((error) => {
      console.log(error);
    });
  }
}
