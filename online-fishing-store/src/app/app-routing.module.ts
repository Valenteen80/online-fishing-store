import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/main-layout/main-layout.module').then(
        (m) => m.MainLayoutModule
      ),
    pathMatch: 'full',
  },
  // { path: '', redirectTo: '/main-page', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
