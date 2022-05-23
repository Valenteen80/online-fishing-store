import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { RouteName } from 'src/app/enums/route-name-enun';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public logoAltImgAttribute: string = 'photo';
  public logoPicture: string = "assets/img/logo.png";
  public logInButtonTitle: string = ButtonLabel.LOG_IN;
  public isActiveButtonMenu: boolean = false;
  public isActiveButtonsAuth: boolean = true;

  constructor(
    public router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
      this.authService.isUserLoggedIn.subscribe((value: boolean) => {
        this.isActiveButtonsAuth = !value;
    });
  }

  public showMenuProfile(): void {
    this.isActiveButtonMenu = !this.isActiveButtonMenu;
  }

  public redirectToMainPage(): void {
    this.router.navigate([RouteName.ROOT]);
  }

  public redirectToAuthPage(): void {
    this.router.navigate([RouteName.AUTH]);
  }

}
