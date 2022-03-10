import { NgModule } from '@angular/core';
import { HeaderModule } from '../components/header/header.module';
import { MainLayoutComponent } from './main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [MainLayoutComponent, FooterComponent],
  imports: [HeaderModule, SharedModule, MainLayoutRoutingModule],
})
export class MainLayoutModule {}
