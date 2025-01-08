import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.services';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  standalone: false,

  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = []
  public initialValue: string = ''

  constructor(private countriesService: CountryService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry( term: string): void{
    this.countriesService.searchCountry( term ).subscribe(
      countries => {
        this.countries = countries
      }
    );
  }

}
