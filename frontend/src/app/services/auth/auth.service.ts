import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { DecodedToken } from 'src/app/interfaces/decoded-token';
import { Token } from 'src/app/interfaces/token';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authApi: string = environment.authApiUrl;
  private token: string = null;
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAdminLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService 
    ) { }

  public login(email: string, password: string): Observable<Token> {
    return this.http.post<{token: string}>(`${this.authApi}/authenticate`, {email: email, password: password})
      .pipe(
        tap(
          (token: Token) => {
            localStorage.setItem('auth_token', token.token);
            this.setToken(token.token);
          }
        ),
      );
  }

  public setToken(token: string): void {
    this.token = token;
    if(this.token) {
      this.isUserLoggedIn.next(true);
      this.getUserEmail() === 'Admin@gmai.com' ? this.isAdminLoggedIn.next(true) : this.isAdminLoggedIn.next(false);
    }
  }

  public getToken(): string {
    return this.token;
  }

  public checkTokenExpire(): boolean {
    return this.jwtHelper.isTokenExpired(this.token); 
  }

  public decodeToken(): DecodedToken {
    return this.jwtHelper.decodeToken(this.token);
  }

  public getUserEmail(): string {
    return this.decodeToken()?.email;
  }

  public isAuthenticated(): boolean {
    return !!this.token;
  }

  public isAuthenticatedAdmin(): boolean {
    return this.getUserEmail() === 'Admin@gmai.com'
  }

  public logout(): void {
    this.setToken(null);
    localStorage.clear();
    this.isUserLoggedIn.next(false);
  }
}
