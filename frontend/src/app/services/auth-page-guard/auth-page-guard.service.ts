import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { RouteName } from 'src/app/enums/route-name-enun';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthPageGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService, 
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if(!this.authService.isAuthenticated()) {
      return of(true);
    } else {
      this.router.navigate([RouteName.ROOT], {queryParams: {accessDenied: true}});
      return of(false);
    }
  }
}
