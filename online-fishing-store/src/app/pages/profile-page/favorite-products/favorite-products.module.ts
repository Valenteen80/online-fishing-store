import { NgModule } from '@angular/core';
import { FavoriteProductsComponent } from './favorite-products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavoriteProductsRoutingModule } from './favorite-products-routing.module';



@NgModule({
  declarations: [FavoriteProductsComponent],
  imports: [
    FavoriteProductsRoutingModule,
    SharedModule,
  ]
})
export class FavoriteProductsModule { }
