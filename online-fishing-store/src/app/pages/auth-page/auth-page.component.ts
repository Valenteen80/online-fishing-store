import { Component, OnInit } from '@angular/core';
import { ButtonLabel } from 'src/app/enums/button-label-enum';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  public logInButtonTitle: string = ButtonLabel.LOG_IN;
  public email: string = '';
  public password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public Login(): void {
    console.log('Login')
  }

}
