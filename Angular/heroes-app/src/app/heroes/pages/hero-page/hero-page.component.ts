import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-hero-page',
  standalone: false,

  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent implements OnInit{

  public hero!: Hero

  divLoading: boolean = false;

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe (
        delay(3000),
        switchMap( ({ id }) => this.heroesService.getHeroesById( id ),
      )
      ).subscribe ( hero => {
        console.log( { hero });
        if(!hero ) return this.router.navigate([ '/heroes/list'])

          this.hero = hero;
          return;
      })
  }

}
