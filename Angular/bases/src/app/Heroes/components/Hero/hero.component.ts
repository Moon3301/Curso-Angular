import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public listHeroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  public listAges: number[] = [20, 30, 40, 50, 60];

  public name: string = ''
  public age: number = 34;
  public metodo: string = 'constructor';
  public capitalizado: string = 'CAPITALIZADO';
  public countName: number = 0;
  public countage: number = 0;

  constructor(){
    this.name = this.listHeroes[this.countName];
    this.age = this.listAges[this.countage];
  }

  changeNameHero(): void{

    this.countName++;

    if(this.countName >= this.listHeroes.length){
      this.countName = 0;
    }

    this.name = this.listHeroes[this.countName];
    this.capitalizado = this.name.toUpperCase();

    this.metodo = `${this.name} - ${this.age}`
  }

  changeAgeHero(): void{

    this.countage++;

    if(this.countage >= this.listAges.length){
      this.countage = 0;
    }

    this.age = this.listAges[this.countage];

    this.metodo = `${this.name} - ${this.age}`
  }

}
