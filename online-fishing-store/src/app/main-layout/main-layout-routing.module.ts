import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesNames } from '../enums/routs-name-enun';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/main-page/main.module').then((m) => m.MainModule),
      },
      {
        path: RoutesNames.PRODUCT_DETAILS,
        loadChildren: () =>
          import('../pages/product-details-page/product-details.module').then(
            (m) => m.ProductDetailsModule
          ),
      },
      {
        path: RoutesNames.PROFILE,
        loadChildren: () =>
          import('../pages/profile-page/profile-page.module').then(
            (m) => m.ProfilePageModule
          ), 
      },
      {
        path: RoutesNames.SHOPPING_CART,
        loadChildren: () =>
          import('../pages/shopping-cart-page/shopping-cart.module').then(
            (m) => m.ShoppingCartModule
          ), 
      },
      {
        path: RoutesNames.ORDER,
        loadChildren: () =>
          import('../pages/order-page/order-page.module').then(
            (m) => m.OrderPageModule
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
