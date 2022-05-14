import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouteName } from 'src/app/enums/route-name-enun';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public api: string = 'http://localhost:5000/api';
  public token: any; //изменить тип

  constructor(private http: HttpClient,private router: Router) { }

  public login(email: string, password: string) {
    this.http.post(this.api + '/authenticate', {email: email,password: password})
    .subscribe((res: any) => {
      console.log(res)
      this.router.navigate([RouteName.PROFILE]);
      localStorage.setItem('auth_token', res.token);
      console.log(localStorage)
    })
  }

}
