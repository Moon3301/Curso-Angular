import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  standalone: false,
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Literna Verde',
      canFly: true,
      color: Color.green
    },
  ]

  toggleUpperCase(): void{
    this.isUpperCase = !this.isUpperCase
  }

  changeOrder( value: keyof Hero){
    console.log('pasando');

    this.orderBy = value;
  }

}
