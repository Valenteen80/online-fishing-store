import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteName } from './enums/route-name-enun';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./main-layout/main-layout.module').then(
        (m) => m.MainLayoutModule
      ), canActivateChild: [AuthGuardService],
  },
  {
    path: RouteName.AUTH,
    loadChildren: () =>
      import('./pages/auth-page/auth-page.module').then(
        (m) => m.AuthPageModule
      ),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
