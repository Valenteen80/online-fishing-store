import { NgModule } from '@angular/core';
import { ShoppingCartPageComponent } from './shopping-cart-page.component';
import { ShoppingCartItemComponent } from './shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartPageRoutingModule } from './shopping-cart-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderPageComponent } from './order-page/order-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShoppingCartPageComponent, ShoppingCartItemComponent],
  imports: [ShoppingCartPageRoutingModule, SharedModule],
})
export class ShoppingCartModule {}



