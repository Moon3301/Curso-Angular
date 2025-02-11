import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.services';
import { Country } from '../../interfaces/country';
@Component({
  selector: 'app-by-capital-page',
  standalone: false,

  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isloading: boolean = false;
  public initialValue: string = ''

  constructor(private countriesService: CountryService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital( term: string): void{

    this.isloading = true;
    this.countriesService.searchCapital( term ).subscribe(
      countries => {
        this.countries = countries
        this.isloading = false;
      }
    );
  }



}
