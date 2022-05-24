import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteName } from './enums/route-name-enun';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./main-layout/main-layout.module').then(
        (m) => m.MainLayoutModule
      ),
  },
  {
    path: RouteName.AUTH,
    loadChildren: () =>
      import('./auth/auth-page.module').then(
        (m) => m.AuthPageModule
      ),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
