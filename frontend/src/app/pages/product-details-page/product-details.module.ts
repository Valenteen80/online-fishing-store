import { NgModule } from '@angular/core';
import { ProductDetailsPageComponent } from './product-details-page.component';
import { ProductDetailsPageRoutingModule } from './product-details-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductDetailsPageComponent],
  imports: [ProductDetailsPageRoutingModule, SharedModule],
})
export class ProductDetailsModule {}
