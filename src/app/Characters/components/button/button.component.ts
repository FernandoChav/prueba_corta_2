import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'character-button',
  standalone: true,
  imports: [HttpClientModule],
  providers: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  
  @Input () page: number = 1;
  @Output() pageSet = new EventEmitter<number>();
  
  @Input() bottonIsDisabled: boolean = false;
  constructor() { 
   
  }

  getNextPage(){
    this.page++;
    this.pageSet.emit(this.page);
  }

  getPreviousPage(){
    this.page--;
    this.pageSet.emit(this.page);
  }


  
  


 
}
