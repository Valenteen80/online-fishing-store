import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
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
  public profileButtonTitle: string = ButtonLabel.PROFILE;
  public logOutButtonTitle: string = ButtonLabel.LOG_OUT;

  constructor(private router: Router) {} 
  
  ngOnInit(): void {}

  public navigateToProfilePage(): void {
    this.router.navigate([`/${RoutesNames.PROFILE}`])
  }
}
