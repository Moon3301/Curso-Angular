import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  standalone: false,

  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent implements OnInit{

  public heroForm = new FormGroup({

    id:               new FormControl<string>(''),
    superhero:        new FormControl<string>('', { nonNullable: true }),
    publisher:        new FormControl<Publisher>( Publisher.DCComics),
    alter_ego:        new FormControl(''),
    first_appearance: new FormControl(''),
    characters:       new FormControl(''),
    alt_img:          new FormControl(''),

  })

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'marvel - Comics' }
  ]

  constructor(
    private heroesService: HeroesService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog

  ){

  }

  get currentHero(): Hero{

    const hero = this.heroForm.value as Hero;
    return hero
  }

  ngOnInit():void{

    if (!this.router.url.includes('edit')) return;

    this.activateRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroesById( id )),
      ).subscribe( hero => {

        if( !hero ) return this.router.navigateByUrl('/')

        this.heroForm.reset( hero );
        return;
      })

  }

  onSubmit(): void{

    if ( this.heroForm.invalid) return;

    if (this.currentHero.id){
      this.heroesService.updateHero ( this.currentHero)
        .subscribe( hero => {
          // TODO mostrar snack
          this.showSnackBar( `${ hero.superhero} updated !`)
        })
      return;
    }

    this.heroesService.addHero (this.currentHero)
      .subscribe( hero => {
        this.router.navigate(['/heroes/edit', hero.id])
        this.showSnackBar( `${ hero.superhero} created !`)
        // TODO mostrar snack y navegar
      })

  }

  onDeleteHero(){
    if ( !this.currentHero ) throw Error('Hero id is required')

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: this.heroForm.value,
      });

      dialogRef.afterClosed()
      .pipe(
        filter( (result: boolean) => result ),
        switchMap( () => this.heroesService.deleteHeroById( this.currentHero.id )),
        filter( (wasDeleted: boolean) => wasDeleted ),
      )
      .subscribe(() => {
        this.router.navigate(['/heroes']);
      });
  }

  showSnackBar(message: string): void{

    this.snackbar.open(message, 'done', {
      duration:2500
    })
  }
}
