import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductResolver } from 'src/app/services/product-resolver/product-resolver.service';
import { ProductDetailsPageComponent } from './product-details-page.component';

const routes: Routes = [
  {
    path: ':id', 
    component: ProductDetailsPageComponent,
    resolve: {
      product: ProductResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetailsPageRoutingModule { }
