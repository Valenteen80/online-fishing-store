import { Component, OnInit } from '@angular/core';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  public logInButtonTitle: string = ButtonLabel.LOG_IN;
  public email: string = '';
  public password: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public login(): void {
    this.authService.login(this.email, this.password)
  }

}
