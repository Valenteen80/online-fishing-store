import { Component, OnInit } from '@angular/core';
import { InputGenderLabel } from 'src/app/enums/input-gender-label-enum';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/users/user.service';
import { COUNTRIES } from './countries';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  public user: User = {} as User;
  public countries: string[] = COUNTRIES;
  public avatarImgAltAttributeValue: string = 'photo';
  public profilePicture: string = 'assets/img/profile_picture.png';
  public readonly inputGenderLabelMale: string = InputGenderLabel.MALE;
  public readonly inputGenderLabelFemale: string = InputGenderLabel.FEMALE;
  public isEditAvatar: boolean = true;
  public isEditFirstName: boolean = true;
  public isEditLastName: boolean = true;
  public isEditCountry: boolean = true;
  public isEditAddress: boolean = true;
  public isEditPhoneNumber: boolean = true;
  public isEditGender: boolean = true;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  public toggleEditingAvatar():void {
    this.isEditAvatar = !this.isEditAvatar;
  }

  public toggleEditingFirstName():void {
    this.isEditFirstName = !this.isEditFirstName;
  }

  public toggleEditingLastName():void {
    this.isEditLastName = !this.isEditLastName;
  }

  public toggleEditingCountry():void {
    this.isEditCountry = !this.isEditCountry;
  }

  public toggleEditingAddress():void {
    this.isEditAddress = !this.isEditAddress;
  }

  public toggleEditingPhoneNumber():void {
    this.isEditPhoneNumber = !this.isEditPhoneNumber;
  }

  public toggleEditingGender():void {
    this.isEditGender = !this.isEditGender;
  }



  public getUser(): void{
    this.userService.getUser().subscribe((user: User) => {
        this.user = user;
      })
  }
}
