import { NgModule } from '@angular/core';
import { AuthPageComponent } from './auth-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthPageRoutingModule } from './auth-page-routing.module';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [AuthPageRoutingModule, SharedModule],
})
export class AuthPageModule {}
