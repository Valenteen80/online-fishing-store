import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../components/footer/footer.module';
import { HeaderModule } from '../components/header/header.module';
import { MainLayoutComponent } from './main-layout.component';
import { MainModule } from '../pages/main-page/main.module';
import { ProductDetailsModule } from '../pages/product-details-page/product-details.module';
import { ProfileModule } from '../pages/profile-page/profile.module';
import { ShoppingCartModule } from '../pages/shopping-cart-page/shopping-cart.module';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    MainModule,
    ProductDetailsModule,
    ProfileModule,
    ShoppingCartModule,
    SharedModule,
    MainLayoutRoutingModule,
  ],
})
export class MainLayoutModule {}
