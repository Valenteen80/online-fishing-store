import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteName } from '../enums/route-name-enum';
import { AdminGuardService } from '../guards/admin-guard/admin-guard.service';
import { GeneralGuardService } from '../guards/general-guard/general-guard.service';
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
      {
        path: RouteName.ORDER,
        loadChildren: () =>
          import('../pages/order-page/order-page.module').then(
            (m) => m.OrderPageModule
          ),
          canActivateChild: [GeneralGuardService],
      },
      {
        path: RouteName.CONTENT_MANAGEMENT,
        loadChildren: () =>
          import('../pages/content-management/content-management.module').then(
            (m) => m.ContentManagementModule
          ),
          canActivateChild: [GeneralGuardService, AdminGuardService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
