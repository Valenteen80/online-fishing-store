import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/users/user.service';
import { COUNTRIES } from '../profile-page/personal-data/countries';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ReportMessage } from 'src/app/enums/report-message-enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from 'src/app/utils/form-validators';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  public user: User;
  public countries: string[] = COUNTRIES;
  public headerValue: string = 'информация о доставке';
  public checkoutButtonTitle: string = ButtonLabel.CHECKOUT;
  public form: FormGroup;

  constructor(
    public userService: UserService,
    private router: Router,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.formBuild();
  }

  public formBuild(): void {
    this.form = this.formBuilder.group({
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      country: [this.user.country, [Validators.required]],
      address: [this.user.address, [Validators.required]],
      phoneNumber: [this.user.phoneNumber, [Validators.required, Validators.pattern(FormValidators.phoneNumberPattern())]],
    });
  }

  public getUser(): void {
    this.userService.getUser().subscribe((user: User) => {
        this.user = user;
      })
  }

  public get firstName() {
    return this.form.get('firstName');
  }

  public get lastName() {
    return this.form.get('lastName');
  }

  public get country() {
    return this.form.get('country');
  }

  public get address() {
    return this.form.get('address');
  }

  public get phoneNumber() {
    return this.form.get('phoneNumber');
  }

  public onSubmit(): void {
    this.router.navigate(['']);
    this.showNotification();
  }

  public showNotification(): void {
    this.notificationService.showSuccess(ReportMessage.SUCCESS_CHECKOUT, 3000);
  }
}
