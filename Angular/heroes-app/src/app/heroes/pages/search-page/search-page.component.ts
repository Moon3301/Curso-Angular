import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  standalone: false,

  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {

  searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(private heroService: HeroesService){}

  searchHero(): void {
    const value: string = this.searchInput.value?.trim() || '';

    this.heroService.getSuggestions( value ).subscribe( heroes => this.heroes = heroes );
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {

    const hero: Hero = event.option.value;

    if ( ! hero){
      this.selectedHero = undefined;
      return;
    }
    console.log(hero);

    this.searchInput.setValue( hero.superhero );
    this.selectedHero = hero;



  }
}
