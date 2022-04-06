import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserData } from 'src/app/interfaces/user-data';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  public avatarImgAltAttributeValue: string = 'photo';
  public profilePicture: string = '../../../../assets/img/profile_picture.png';
  public form: FormGroup;
  public userData: UserData;


  constructor(
    public userService: UserService
  ) { }

  public getUser(): void{
    this.userService.getUser().subscribe((user: UserData) => {
        this.userData = user;
      })
  }

  public submit(): void {
    console.log(this.form)
    this.userData = {...this.form.value}
    console.log(this.userData)
  }

  ngOnInit(): void {
    this.getUser()

    this.form = new FormGroup({
      avatar: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      country: new FormControl('Беларусь'),
      address: new FormControl(''),
      phoneNumber: new FormControl(''),
      gender: new FormControl('male')
    })
  }

}
