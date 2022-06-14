import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { RouteName } from 'src/app/enums/route-name-enum';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  public isPanelProfile: boolean = false;
  public avatarImgAltAttributeValue: string = 'photo';
  public profilePicture: string = 'assets/img/profile_picture.png';
  public profileButtonTitle: string = ButtonLabel.PROFILE;
  public logOutButtonTitle: string = ButtonLabel.LOG_OUT;
  private subscription: Subscription;
  public role: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
    ) {} 

  ngOnInit(): void {
    this.subscription = this.authService.role.subscribe((value: string) => this.role = value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public togglePanelProfile(): void {
    this.isPanelProfile = !this.isPanelProfile;
  }

  public redirectToProfilePage(): void {
    this.router.navigate([`/${RouteName.PROFILE}`]);
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate([`/${RouteName.AUTH}`]);
  }
}
