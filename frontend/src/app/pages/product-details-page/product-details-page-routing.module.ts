import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolverService } from 'src/app/services/resolver-servis/resolver.service';
import { ProductDetailsPageComponent } from './product-details-page.component';

const routes: Routes = [
  {
    path: ':id', 
    component: ProductDetailsPageComponent,
    resolve: {
      product: ResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetailsPageRoutingModule { }
