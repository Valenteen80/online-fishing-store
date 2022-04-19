import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/users/user.service';
import { COUNTRIES } from '../profile-page/personal-data/countries';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  public user: User = {} as User;
  public countries: string[] = COUNTRIES;
  public headerValue: string = 'информация о доставке';
  public notificationValue: string = 'Ваш заказ успешно оформлен, спасибо за покупку.';
  public isEditFirstName: boolean = true;
  public isEditLastName: boolean = true;
  public isEditCountry: boolean = true;
  public isEditAddress: boolean = true;
  public isEditPhoneNumber: boolean = true;
  public buyButtonTitle: string = ButtonLabel.BUY;

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  public getUser(): void{
    this.userService.getUser().subscribe((user: User) => {
        this.user = user;
      })
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

  public navigateToMainPage(): void {
    this.router.navigate(['']);
  }

}
