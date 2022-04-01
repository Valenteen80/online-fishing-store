import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesNames } from 'src/app/enums/routs-name-enun';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public isMouseenterProfile: boolean = false;
  public avatarImgAltAttributeValue: string = 'photo';
  public profilePicture: string = 'assets/img/profile_picture.png';
  public profileButtonTitle: string = 'ПРОФИЛЬ';
  public logOutButtonTitle: string = 'ВЫЙТИ';

  constructor(
    private router: Router
  ) {}

  public goProfilePage(): void {
    this.router.navigate([`/${RoutesNames.PROFILE}`])
  }

  ngOnInit(): void {}
}
