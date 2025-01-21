import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from '../../../shared/Validators/validators';
import * as customValidators from '../../../shared/Validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidator } from '../../../shared/Validators/email.validator';
@Component({
  selector: 'app-register-page',
  standalone: false,
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent implements OnInit {

  public myForm!: FormGroup;

  constructor(private fb: FormBuilder, private validatorService: ValidatorsService, private emailValidators: EmailValidator){}

  ngOnInit(): void {

    this.myForm = this.fb.group({

      name: ['', [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern )] ],
      email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern) ], this.emailValidators],
      username: ['', [Validators.required, this.validatorService.cantBeStrider ] ],
      password: ['', [Validators.required, Validators.minLength(6)] ],
      password2: ['', [Validators.required] ]

    },{
      validators: [
        this.validatorService.isFieldOneEqualFieldTwo('password', 'password2')
      ]
    }
  )



  }

  isValidField(field: string){
    // TODO validar form desde un servicio
    return this.validatorService.isValidField(this.myForm, field);

  }



  onSubmit(){
    this.myForm.markAllAsTouched();
  }


}
