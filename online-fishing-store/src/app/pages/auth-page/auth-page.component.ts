import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit, OnDestroy {
  public notification: string = '';
  public form: FormGroup;
  private aSub: Subscription;
  public logInButtonTitle: string = ButtonLabel.LOG_IN;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, 
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(4)]]
    })

    if(this.authService.isAuthenticated()) {
      this.form.disable();
      this.notification = `Вы авторизованы как ${this.authService.getUserEmail()} `;
    } else {
      this.notification = 'Вы не авторизованы, либо срок вашей сессии истёк, авторизуйтесь';
    }
  }

  ngOnDestroy(): void {
    if(this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  public onSubmit(): void {
    this.form.disable();
    this.aSub = this.authService.login(this.form.value.email, this.form.value.password).subscribe(
      () => {
        this.router.navigate(['']);
      },
      (error) => {
        this.notification = error;
        this.form.enable();
      }
    );
  }

}
