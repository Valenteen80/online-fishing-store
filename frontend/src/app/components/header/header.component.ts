import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { RouteName } from 'src/app/enums/route-name-enun';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public logoAltImgAttribute: string = 'photo';
  public logoPicture: string = "assets/img/logo.png";
  public logInButtonTitle: string = ButtonLabel.LOG_IN;
  public isActiveButtonMenu: boolean = false;
  public isActiveButtonsAuth: boolean = true;
  private subscribe: Subscription;

  constructor(
    public router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscribe = this.authService.isUserLoggedIn.subscribe((value: boolean) => {
      this.isActiveButtonsAuth = !value;
    });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
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
