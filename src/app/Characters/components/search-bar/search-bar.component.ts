import { Component, EventEmitter, inject, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'character-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  
  constructor() { }

  search = '';

  @Output() searchCharacter = new EventEmitter<string>();
 
  onSearch(){
    
    this.searchCharacter.emit(this.search);
  }
}
