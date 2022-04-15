import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteProductsComponent } from './favorite-products.component';

const routes: Routes = [
  {
    path: '',
    component: FavoriteProductsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteProductsRoutingModule { }
