import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/users/user.service';
import { COUNTRIES } from '../profile-page/personal-data/countries';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ReportMessage } from 'src/app/enums/report-message-enum';

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
  public checkoutButtonTitle: string = ButtonLabel.CHECKOUT;

  constructor(
    public userService: UserService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void{
    this.userService.getUser().subscribe((user: User) => {
        this.user = user;
      })
  }

  public redirectToMainPage(): void {
    this.router.navigate(['']);
    this.showNotification();
  }

  public showNotification(): void {
    this.notificationService.showSuccess(ReportMessage.SUCCESS_CHECKOUT, 3000);
  }
}
