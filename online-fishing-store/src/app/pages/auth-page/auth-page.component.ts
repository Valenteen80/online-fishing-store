import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { RouteName } from 'src/app/enums/route-name-enun';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit, OnDestroy {
  public notification: string = '';
  public form: FormGroup;
  private aSub: Subscription
  public logInButtonTitle: string = ButtonLabel.LOG_IN;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)])
    })

    if(this.authService.isAuthenticated()) {
      this.form.disable();
      this.notification = `Вы авторизованы как ${this.form.value.email} `
    }
  }

  ngOnDestroy(): void {
    if(this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  public onSubmit():void {
    this.form.disable();
    this.aSub = this.authService.login(this.form.value.email, this.form.value.password).subscribe(
      (resp) => {
        this.router.navigate([''])
      },
      error => {
        this.notification = error.error.errorMessage
        this.form.enable();
      }
        
    )
  }

}
