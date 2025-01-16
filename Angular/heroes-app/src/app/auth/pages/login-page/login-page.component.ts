import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: false,

  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  constructor(private authService: AuthService, private router: Router){}

  onLogin(): void{
    this.authService.login('','')
      .subscribe( user => {
        console.log(user);
        this.router.navigate(['/'])
      })
  }

}
