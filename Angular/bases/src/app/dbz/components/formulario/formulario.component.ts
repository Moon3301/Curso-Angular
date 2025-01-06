import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-formulario-dbz',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  constructor() { }

  ngOnInit() {

  }

  emitCharacter(): void {


    if (this.character.name.trim().length === 0) {
      return;
    }

    this.onNewCharacter.emit(this.character);

    console.log(this.character);

    this.character = { name: '', power: 0 };

  }

}
