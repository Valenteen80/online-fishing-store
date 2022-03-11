import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public logInButtonTitle: string = 'ВХОД';
  public signUpButtonTitle: string = 'РЕГИСТРАЦИЯ';

  constructor() {}

  ngOnInit(): void {}
}
