import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../components/header/header.module';
import { MainLayoutComponent } from './main-layout.component';
import { MainModule } from '../pages/main-page/main.module';
import { ProductDetailsModule } from '../pages/product-details-page/product-details.module';
import { ProfilePageModule } from '../pages/profile-page/profile-page.module';
import { ShoppingCartModule } from '../pages/shopping-cart-page/shopping-cart.module';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [MainLayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MainModule,
    ProductDetailsModule,
    ProfilePageModule,
    ShoppingCartModule,
    SharedModule,
    MainLayoutRoutingModule,
  ],
})
export class MainLayoutModule {}
