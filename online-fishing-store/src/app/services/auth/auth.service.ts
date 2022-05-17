import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public api: string = 'http://localhost:5000/api';
  private token: string = null;

  constructor(private http: HttpClient, private router: Router) { }

  public login(email: string, password: string): Observable <{token: string}> {
    return this.http.post<{token: string}>(this.api + '/authenticate', {email: email,password: password})
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('auth_token', token);
            this.setToken(token)
          }
        )
      )
  }

  public setToken(token: string): void{
    this.token = token;
  }

  public getToken(): string {
    return this.token;
  }

  public isAuthenticated(): boolean {
    return !!this.token;
  }

  public logout(): void {
    this.setToken(null);
    localStorage.clear();
  }

}