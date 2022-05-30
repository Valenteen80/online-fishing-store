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
  private api: string = environment.apiUrl;
  private token: string = null;
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService 
    ) { }

  public login(email: string, password: string): Observable<Token> {
    return this.http.post<{token: string}>(`${this.api}/authenticate`, {email: email, password: password})
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

  public logout(): void {
    this.setToken(null);
    localStorage.clear();
    this.isUserLoggedIn.next(false);
  }
}
