import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteName } from '../enums/route-name-enun';
import { GeneralGuardService } from '../services/general-guard/general-guard.service';
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
        path: RouteName.PRODUCT_DETAILS,
        loadChildren: () =>
          import('../pages/product-details-page/product-details.module').then(
            (m) => m.ProductDetailsModule), 
            canActivateChild: [GeneralGuardService],
      },
      {
        path: RouteName.PROFILE,
        loadChildren: () =>
          import('../pages/profile-page/profile-page.module').then(
            (m) => m.ProfilePageModule), 
            canActivateChild: [GeneralGuardService],
      },
      {
        path: RouteName.SHOPPING_CART,
        loadChildren: () =>
          import('../pages/shopping-cart-page/shopping-cart.module').then(
            (m) => m.ShoppingCartModule), 
            canActivateChild: [GeneralGuardService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
