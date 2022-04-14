import { Component, OnInit } from '@angular/core';
import { ButtonLabel } from 'src/app/enums/button-label-enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public logInButtonTitle: string = ButtonLabel.LOG_IN;
  public signUpButtonTitle: string = ButtonLabel.SING_UP;
  public isActiveButtonMenu = false;

  constructor() {}

  public showSidebar(): void {
    this.isActiveButtonMenu = !this.isActiveButtonMenu;
  }

  ngOnInit(): void {}
}
