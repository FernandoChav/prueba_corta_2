import { Component, Input } from '@angular/core';
import { Status } from '../../interfaces/Status';



@Component({
  selector: 'character-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor() { }
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() species: string = '';
  @Input() status: Status = Status.Unknown;
  @Input() type : string = '';
  @Input() gender : string = '';
  @Input() origin : Location | undefined ;
  @Input() location : Location | undefined ;
  @Input() episode : string[] = [];

}


