import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero.interfaces';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-list-page',
  standalone: false,

  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {

  public heroes : Hero[] = [];

  constructor( private heroesService: HeroesService){}

  ngOnInit(): void{

    this.heroesService.getHeroes()
      .subscribe( heroes => this.heroes = heroes);

  }

}
