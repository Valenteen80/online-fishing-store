import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RouteName } from 'src/app/enums/route-name-enun';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService, 
    private router: Router,
    ) { } 

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if(this.authService.isAuthenticated()) {
      return of(true);
    } else {
      this.router.navigate([RouteName.AUTH], {queryParams: {accessDenied: true}});
      return of(false);
    }
  }

  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean> {
    return this.canActivate(route, state);
  }

}
