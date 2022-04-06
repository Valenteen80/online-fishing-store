import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserData } from 'src/app/interfaces/user-data';
import { USERS } from 'src/app/mocks/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userData: UserData = USERS;

  constructor() { }

  public getUser():Observable<UserData> {
    return of(this.userData)
  }
}
