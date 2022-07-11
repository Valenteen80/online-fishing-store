import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthRole } from 'src/app/enums/auth-role-enum';
import { NotificationText } from 'src/app/enums/notification-text-enum';
import { RouteName } from 'src/app/enums/route-name-enum';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {

  constructor(
    private authService: AuthService, 
    private router: Router,
    private notificationService: NotificationService,
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if((this.authService.role.getValue() === AuthRole.ADMIN) && !this.authService.checkTokenExpire()) {
      return of(true);
    } 
    
      this.router.navigate([RouteName.AUTH]);
      this.notificationService.showError(NotificationText.FORBIDDEN, 3000);

      return of(false);
  }

  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean> {
    return this.canActivate(route, state);
  }
}
