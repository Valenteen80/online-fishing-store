import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RouteName } from 'src/app/enums/route-name-enum';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralGuardService implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService, 
    private router: Router,
  ) { } 

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if(this.authService.isAuthenticated() && !this.authService.checkTokenExpire()) {
      return of(true);
    } else {
      this.authService.logout();
      this.router.navigate([RouteName.AUTH]);

      return of(false);
    }
  }

  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean> {
    return this.canActivate(route, state);
  }
}
