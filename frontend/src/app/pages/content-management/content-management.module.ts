import { NgModule } from '@angular/core';
import { ContentManagementComponent } from './content-management.component';
import { ContentManagementRoutingModule } from './content-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductUnitComponent } from './product-unit/product-unit.component';
import { CreateProductComponent } from './create-product/create-product.component';



@NgModule({
  declarations: [
    ContentManagementComponent,
    ProductUnitComponent,
    CreateProductComponent
  ],
  imports: [
    ContentManagementRoutingModule,
    SharedModule
  ]
})
export class ContentManagementModule { }
