import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  standalone: false,

  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent implements OnInit{

  public dynamicForm!: FormGroup;

  public newFavorite: FormControl = new FormControl('', Validators.required)

  constructor( private fb: FormBuilder){}

  ngOnInit(): void {

    this.dynamicForm = this.fb.group({

      name: ['',[ Validators.required, Validators.minLength(3)]],
      favoriteGames: this.fb.array([
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required]
      ]),

    })

  }

  isValidField( field: string ): boolean | null {
    return this.dynamicForm.controls[field].errors
      && this.dynamicForm.controls[field].touched;
  }

  getFieldError( field: string ): string | null {

    if ( !this.dynamicForm.controls[field] ) return null;

    const errors = this.dynamicForm.controls[field].errors || {};

    for (const key of Object.keys(errors) ) {
      switch( key ) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } caracters.`;
      }
    }

    return null;
  }

  onAddToFavorite(): void{
    if ( this.newFavorite.invalid) return;

    const newGame = this.newFavorite.value;

    this.favoriteGames.push(
      this.fb.control( newGame, Validators.required)
    )

    this.newFavorite.reset();

    console.log(this.newFavorite.value);

  }

  isValidFieldInArray(formArray: FormArray, index: number): boolean | null{
    return formArray.controls[index].errors
      && formArray.controls[index].touched;
  }

  get favoriteGames(){
    return this.dynamicForm.get('favoriteGames') as FormArray;
  }

  onDeleteFavorite(index: number): void{
    this.favoriteGames.removeAt( index );
  }

  onSubmit(): void{

    if (this.dynamicForm.invalid ){
      this.dynamicForm.markAllAsTouched()
      return;
    }

    console.log(this.dynamicForm.value);
    (this.dynamicForm.controls['favoriteGames'] as FormArray) = this.fb.array([])

    this.dynamicForm.reset();


  }



}
