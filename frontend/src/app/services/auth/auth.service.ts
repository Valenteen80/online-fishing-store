import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthRole } from 'src/app/enums/auth-role-enum';
import { LocalStorageKey } from 'src/app/enums/local-storage-key-enum';
import { DecodedToken } from 'src/app/interfaces/decoded-token';
import { Token } from 'src/app/interfaces/token';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authApi: string = environment.apiUrl;
  private token: string = null;
  public role: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService 
    ) { }

  public login(email: string, password: string): Observable<Token> {
    return this.http.post<{token: string}>(`${this.authApi}/authenticate`, {email: email, password: password})
      .pipe(
        tap(
          (token: Token) => {
            localStorage.setItem(LocalStorageKey.AUTH_TOKEN, token.token);
            this.setToken(token.token);
          }
        ),
      );
  }

  public checkRoleUser(): void {
    this.getUserEmail() === 'Admin@gmai.com' ? this.role.next(AuthRole.ADMIN) : this.role.next(AuthRole.USER);
  }

  public setToken(token: string): void {
    this.token = token;
    this.checkRoleUser();
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
    this.role.next('');
  }
}
