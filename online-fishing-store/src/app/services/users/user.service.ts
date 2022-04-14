import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { USERS } from 'src/app/mocks/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userData: User = USERS;
  
  public getUser():Observable<User> {
    return of(this.userData)
  }
}
