import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
