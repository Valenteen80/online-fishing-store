import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartPageComponent } from './shopping-cart-page.component';

@NgModule({
  declarations: [ShoppingCartPageComponent],
  imports: [CommonModule],
  exports: [ShoppingCartPageComponent],
})
export class ShoppingCartModule {}
