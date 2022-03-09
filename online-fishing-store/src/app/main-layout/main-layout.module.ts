import { NgModule } from '@angular/core';
import { FooterModule } from '../components/footer/footer.module';
import { HeaderModule } from '../components/header/header.module';
import { MainLayoutComponent } from './main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    FooterModule,
    HeaderModule,
    SharedModule,
    MainLayoutRoutingModule,
  ],
})
export class MainLayoutModule {}
