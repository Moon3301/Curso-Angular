import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interfaces';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`);
  }

  getHeroesById(id: string): Observable<Hero | undefined>{

    return this.http.get<Hero>(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        catchError( error => of(undefined))
      )
  }

  getSuggestions( query: string ): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes?q=${ query }&_limit=6`);
  }

  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(`${ this.baseUrl }/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero>{
    if(!hero.id) throw Error('Hero id is required');

    return this.http.patch<Hero>(`${ this.baseUrl }/heroes/${ hero.id }`, hero);
  }

  deleteHeroById(id:string): Observable<boolean>{

    return this.http.delete<Hero>(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        map( resp => true ),
        catchError( Err => of(false))
      )
  }

}
