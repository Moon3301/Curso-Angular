import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log(uuid());

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 5000
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 4000
    },
    {
      id: uuid(),
      name: 'Piccolo',
      power: 3000
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 1500
    }
  ];

  constructor() { }

  onNewCharacter(character: Character): void{

    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }

    this.characters.push(character);
    console.log(character)
  }

  onDeleteCharacterById( id: string ): void{
    console.log(id);
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
