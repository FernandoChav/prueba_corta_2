import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'character-button',
  standalone: true,
  imports: [HttpClientModule],
  providers: [CharacterService],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  private characterService = inject(CharacterService);
  private maxPage: number = 34;
  private page : number = 1;
  
  constructor() { 
    this.getMaxPage();
  }
  
  getMaxPage(){
    this.characterService.getCharacters().then((response) => {
      this.maxPage = response.info.pages;
    }).catch((error) => { 
      console.log(error);
    });
  }

  getNexPage(){
    if (this.page == this.maxPage){
      const button = document.getElementById('next');
      const buttonPrev = document.getElementById('prev');
      if (button && buttonPrev) {
        button.setAttribute('disabled', 'true');
        buttonPrev.removeAttribute('disabled');
        return;
      }
    }
    this.page++;
    this.characterService.getCharactersByPage(this.page).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
  getPrevPage(){
    if (this.page == 1){
      const button = document.getElementById('prev');
      const buttonNext = document.getElementById('next');
      if (button && buttonNext) {
        button.setAttribute('disabled', 'true');
        buttonNext.removeAttribute('disabled');
        return;
      }
    }
    this.page--;
    this.characterService.getCharactersByPage(this.page).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
  
}
