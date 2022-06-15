import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthRole } from 'src/app/enums/auth-role-enum';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { RouteName } from 'src/app/enums/route-name-enum';
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
  private subscription: Subscription;
  public editButtonTitle: string = ButtonLabel.CONTENT_MANAGEMENT;
  public role: string = '';
  public readonly adminRole: string = AuthRole.ADMIN;

  constructor(
    public router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscription = this.authService.role.subscribe((value: string) => this.role = value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  public redirectToContentManagementPage() {
    this.router.navigate([RouteName.CONTENT_MANAGEMENT]);
  }
}
