import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.services';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-page',
  standalone: false,

  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  public country?: Country;

  constructor(private activatedRoute: ActivatedRoute, private countriesService: CountryService, private router: Router){}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe(country => {

        if(!country){
          return this.router.navigateByUrl('');
        }

        return this.country = country

      })
  }





}
