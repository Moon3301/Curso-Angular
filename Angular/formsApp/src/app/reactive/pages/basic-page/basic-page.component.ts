import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


const rxt5090 = {
  name: 'rxt5090',
  price: 2500,
  inStorage: 6
}
@Component({
  selector: 'app-basic-page',
  standalone: false,

  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent implements OnInit{

  public myForm!: FormGroup;

  constructor(private fb: FormBuilder){

    this.myForm = this.fb.group({

      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      inStorage: [0, [Validators.required, Validators.min(0)]]

    })

  }
  ngOnInit(): void {

    this.myForm.reset( rxt5090 )

  }

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  getFieldError( field: string ): string | null {

    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

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

  onSave(){

    if (this.myForm.invalid) return;

    console.log( this.myForm.value );

    this.myForm.reset({
      price: 0,
      inStorage: 0
    });

  }



}
