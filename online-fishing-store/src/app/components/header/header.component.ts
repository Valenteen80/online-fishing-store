import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { RouteName } from 'src/app/enums/route-name-enun';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public logoAltImgAttribute: string = 'photo';
  public logoPicture: string = "assets/img/logo.png";
  public logInButtonTitle: string = ButtonLabel.LOG_IN;
  public signUpButtonTitle: string = ButtonLabel.SING_UP;
  public isActiveButtonMenu = false;

  constructor(
    public router: Router
  ) {}

  public showSidebar(): void {
    this.isActiveButtonMenu = !this.isActiveButtonMenu;
  }

  public redirectToMainPage(): void {
    this.router.navigate(['']);
  }

  public redirectToAuthPage(): void {
    this.router.navigate([RouteName.AUTH])
  }

}
