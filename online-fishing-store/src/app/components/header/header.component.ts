import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public logInButtonTitle: string = 'ВХОД';
  public signUpButtonTitle: string = 'РЕГИСТРАЦИЯ';
  public isActiveButtonShowSideBar = false;

  constructor() {}

  public showSidebar(): void {
    this.isActiveButtonShowSideBar = !this.isActiveButtonShowSideBar;
  }

  ngOnInit(): void {}
}
