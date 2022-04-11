import { Component, OnInit } from '@angular/core';
import { InputGenderLabel } from 'src/app/enums/input-gender-label-enum';
import { UserData } from 'src/app/interfaces/user-data';
import { UserService } from 'src/app/services/users/user.service';
import { COUNTRYES } from './countryes';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  public userData: UserData = {} as UserData;
  public countryes: string[] = COUNTRYES;
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
  public isEditedForm: boolean = true;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  public getUser(): void{
    this.userService.getUser().subscribe((user: UserData) => {
        this.userData = user;
      })
  }
}
