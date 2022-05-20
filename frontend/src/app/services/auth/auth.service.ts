import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { DecodedToken } from 'src/app/interfaces/decoded-token';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public api: string = environment.apiUrl;
  private token: string = null;
  private jwtHelper = new JwtHelperService();
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient, 
    ) { }

  public login(email: string, password: string): Observable <{token: string}> {
    return this.http.post<{token: string}>(`${this.api}/authenticate`, {email: email, password: password})
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('auth_token', token);
            this.setToken(token);
          }
        ),
      );
  }

  public setToken(token: string): void {
    this.token = token;
    if(this.token) {
      this.isUserLoggedIn.next(true);
    }
  }

  public checkToken(): void {
    if(this.jwtHelper.isTokenExpired(this.token)) {
      this.logout();
    }
  }

  public decodeToken(): DecodedToken {
    return this.jwtHelper.decodeToken(this.token);
  }

  public getUserEmail(): string {
    return this.decodeToken()?.email;
  }

  public isAuthenticated(): boolean {
    this.checkToken();
    return !!this.token;
  }

  public logout(): void {
    this.setToken(null);
    localStorage.clear();
    this.isUserLoggedIn.next(false);
  }

}
