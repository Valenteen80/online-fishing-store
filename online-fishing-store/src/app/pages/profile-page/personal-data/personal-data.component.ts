import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  public avatarImgAltAttributeValue: string = 'photo';
  public profilePicture: string = '../../../../assets/img/profile_picture.png';
  constructor() { }

  public form: FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({})
  }

}
