import { Component } from "@angular/core";
import { DbzService } from "../services/dbz.service";
import { Character } from "../interfaces/character.interface";

@Component({

  standalone: false,
  selector: 'app-main-page-dbz',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']

})
export class MainPageComponent {

  constructor(public dbz: DbzService){}

  ngOnInit(){

  }

  get characters(): Character[]{
    return [...this.dbz.characters];
  }

  onDeleteCharacter(id: string): void{
    this.dbz.onDeleteCharacterById(id);
  }

  onNewCharacter(character: Character): void{
    this.dbz.onNewCharacter(character);
  }

}
