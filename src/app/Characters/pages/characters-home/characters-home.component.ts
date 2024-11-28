import { Component, EventEmitter, inject,Input,Output } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CharacterService } from '../../services/character.service';
import { ResponseAPICharacter } from '../../interfaces/ResponseAPICharacter';
import { CardComponent } from '../../components/card/card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'character-page-home',
  standalone: true,
  imports: [ButtonComponent,CardComponent,SearchBarComponent],
  providers: [CharacterService],
  templateUrl: './characters-home.component.html',
  styleUrl: './characters-home.component.css'
})
export class CharactersHomeComponent {
  private characterService = inject(CharacterService);
  characters:  any[] = [];
  @Input() page : number = 1;
  @Output() buttonNextsDisabled : boolean = false;
  @Output() buttonPreviousDisabled : boolean = true;
  isWriting: boolean = false;
  maxPage: number = 0;
  constructor() { 
    this.getCharacters();
    this.getMaxPage();
  }
  getCharacters(){
    this.characterService.getCharacters().then((response) => {
      this.characters = response.results;
      
    }).catch((error) => {
      console.log(error);
    });
  }
  getCharactersByPage(page: number){
    if (this.isWriting ) this.isWriting = false;
    if (page === 1) {
      this.buttonPreviousDisabled = true;
    } else {
      this.buttonPreviousDisabled = false;
    }
    if (page === this.maxPage) {
      this.buttonNextsDisabled = true;
    } else {
      this.buttonNextsDisabled = false;
    }
  
    this.characterService.getCharactersByPage(page).then((response) => {
      this.characters = response.results;
      
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
  getCharactersBySearch(search: string){
    if (!this.isWriting ) this.isWriting = true;
    this.characterService.getCharactersBySearch(search).then((response) => {
    this.characters = response.results;
      
    }).catch((error) => {
      console.log(error);
    });
  }
}
