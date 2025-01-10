import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  standalone: false,

  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'fernando'
  public nameUpper: string = 'FERNANDO'
  public fullName:string = 'fErNanDo hErRerA'

  public customDate: Date = new Date();

}
