import { NgModule } from '@angular/core';
import { FavoriteProductsComponent } from './favorite-products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavoriteProductsRoutingModule } from './favorite-products-routing.module';
import { FavoriteProductsItemComponent } from './favorite-products-item/favorite-products-item.component';



@NgModule({
  declarations: [FavoriteProductsComponent, FavoriteProductsItemComponent],
  imports: [
    FavoriteProductsRoutingModule,
    SharedModule,
  ]
})
export class FavoriteProductsModule { }
