import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserData } from 'src/app/interfaces/user-data';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  public avatarImgAltAttributeValue: string = 'photo';
  public profilePicture: string = '../../../../assets/img/profile_picture.png';
  public form: FormGroup;
  public formData: UserData = {
    firstName: "Алесь",
    lastName: "Захаренчук",
    address: "",
    phoneNumber: 375293734890,
    gender: "муж",
  }


  constructor() { }

  public submit(): void {
    console.log(this.form)
    this.formData = {...this.form.value}
    console.log(this.formData)
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      avatar: new FormControl(''),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      address: new FormControl(''),
      phoneNumber: new FormControl('', Validators.required),
      gender: new FormControl('')
    })
  }

}
