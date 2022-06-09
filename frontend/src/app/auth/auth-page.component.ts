import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, filter, of } from 'rxjs';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotificationText } from '../enums/notification-text-enum';
import { RouteName } from '../enums/route-name-enum';
import { NotificationService } from '../services/notification/notification.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  public notification: string = '';
  public form: FormGroup;
  public logInButtonTitle: string = ButtonLabel.LOG_IN;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, 
    private router: Router,
    private notificationService: NotificationService,
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });

    if(this.authService.isAuthenticated()) {
      this.form.disable();
      this.notification =  `${NotificationText.SUCCESS_LOGGED} ${this.authService.getUserEmail()}`;
    } else {
      this.notification = NotificationText.ERROR_NOT_AUTHORIZED;
    }
  }

  public get email() {
    return this.form.get('email');
  }

  public get password() {
    return this.form.get('password');
  }

  public onSubmit(): void {
    this.form.disable();
    this.authService.login(this.form.value.email, this.form.value.password)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        this.notification = error.error.errorMessage;
        this.form.enable();

        return of(false);
      }),
      filter(Boolean)
    )
    .subscribe(() => {
      this.router.navigate([RouteName.ROOT]);
      this.notificationService.showInfo(`${NotificationText.SUCCESS_LOGGED} ${this.authService.getUserEmail()}`, 3000);
    });
  }
}
