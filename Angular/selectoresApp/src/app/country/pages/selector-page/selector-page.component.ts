import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  standalone: false,

  templateUrl: './selector-page.component.html',
  styleUrl: './selector-page.component.css'
})
export class SelectorPageComponent implements OnInit{

  public myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      region: ['', [ Validators.required ]],
      country: ['', [ Validators.required ]],
      borders: ['', [ Validators.required ]]
    })
  }

  onSubmit(){
    console.log(this.myForm.value);

  }

}
