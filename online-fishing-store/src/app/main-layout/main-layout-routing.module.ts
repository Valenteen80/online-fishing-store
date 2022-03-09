import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/main-page/main.module').then(
            (m) => m.MainModule
        ),
      },
      {
        path: 'product-details',
        loadChildren: () =>
          import('../pages/product-details-page/product-details.module').then(
            (m) => m.ProductDetailsModule
        ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
