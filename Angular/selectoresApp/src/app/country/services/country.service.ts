import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/country.interfaces';
import { HttpClient } from '@angular/common/http';
import { combineLatest, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl: string = 'https://restcountries.com/v3.1'

  private _regions: Region[] = [Region.Americas, Region.Africa, Region.Asia, Region.Europe, Region.Oceania];

  constructor(private http: HttpClient) { }

  get regions(): Region[] {
    return [...this._regions];
  }

  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {

    if (!region) return of([]);

    const url: string = ` ${ this.baseUrl }/region/${ region }?fields=cca3,name,borders`

    return this.http.get<Country[]>(url)
      .pipe(
        map( countries => countries.map( country => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? []
        }))),
        tap( response => console.log({response}))
      )

  }

  getCountryByAlphaCode(alphaCode: string): Observable<SmallCountry>{

    const url = `${ this.baseUrl}/alpha/${ alphaCode}?fields=cca3,name,borders`;

    return this.http.get<Country>(url)
      .pipe(
        map( country => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? []
        }))
      )
  }

  getCountryBorderesByCodes( borders: string[]): Observable<SmallCountry[]>{

    if( !borders || borders.length === 0) return of([]);

    const countryRequest: Observable<SmallCountry>[] = [];

    borders.forEach( code => {
      const request = this.getCountryByAlphaCode(code);
      countryRequest.push( request );
    });

    return combineLatest( countryRequest );

  }

}
