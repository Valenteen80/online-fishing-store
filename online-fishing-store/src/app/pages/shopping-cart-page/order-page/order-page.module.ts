import { NgModule } from '@angular/core';
import { OrderPageComponent } from './order-page.component';
import { OrderPageRoutingModule } from './order-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [OrderPageComponent],
  imports: [OrderPageRoutingModule, SharedModule  ]
})
export class OrderPageModule { }


