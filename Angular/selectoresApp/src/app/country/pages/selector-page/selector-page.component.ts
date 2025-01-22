import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  standalone: false,

  templateUrl: './selector-page.component.html',
  styleUrl: './selector-page.component.css'
})
export class SelectorPageComponent implements OnInit{

  public myForm!: FormGroup;

  public countriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] = [];

  constructor(private fb: FormBuilder, private countryServices: CountryService) {}

  ngOnInit(): void {

    this.myForm = this.fb.group({
      region: ['', [ Validators.required ]],
      country: ['', [ Validators.required ]],
      borders: ['', [ Validators.required ]]
    })


    this.onRegionChanged();
    this.onCountryChanges();
  }

  onRegionChanged(): void{
    this.myForm.get('region')?.valueChanges
      .pipe(
        tap( () => this.myForm.get('country')?.setValue('')),
        tap( () => this.borders = []),
        switchMap ( region => this.countryServices.getCountriesByRegion(region))
      )
      .subscribe( countries => {
        console.log({countries});
        this.countriesByRegion = countries;

      })
  }



  onCountryChanges(): void{
    this.myForm.get('country')?.valueChanges
      .pipe(
        tap( () => this.myForm.get('borders')?.setValue('')),
        filter( (value: string) => value.length > 0),
        switchMap ( alphaCode => this.countryServices.getCountryByAlphaCode(alphaCode)),
        switchMap( (country) => this.countryServices.getCountryBorderesByCodes( country.borders ))
      )
      .subscribe( country => {
        console.log({country});
        this.borders = country;

      })
  }

  onSubmit(){
    console.log(this.myForm.value);

  }

  get regions(): Region[] {
    return this.countryServices.regions;
  }

}
