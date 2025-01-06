import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  standalone: false,
  selector: 'app-list-dbz',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponent {

  @Input()
  public characters: Character[] = [

  ];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  onDelete(id:string):void{
    this.onDeleteCharacter.emit(id);
  }

}
