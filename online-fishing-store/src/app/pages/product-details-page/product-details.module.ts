import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsPageComponent } from './product-details-page.component';

@NgModule({
  declarations: [ProductDetailsPageComponent],
  imports: [CommonModule],
  exports: [ProductDetailsPageComponent],
})
export class ProductDetailsModule {}
