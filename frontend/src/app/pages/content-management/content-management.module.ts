import { NgModule } from '@angular/core';
import { ContentManagementComponent } from './content-management.component';
import { ContentManagementRoutingModule } from './content-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductUnitComponent } from './product-unit/product-unit.component';
import { AddedProductComponent } from './added-product/added-product.component';



@NgModule({
  declarations: [
    ContentManagementComponent,
    ProductUnitComponent,
    AddedProductComponent
  ],
  imports: [
    ContentManagementRoutingModule,
    SharedModule
  ]
})
export class ContentManagementModule { }
