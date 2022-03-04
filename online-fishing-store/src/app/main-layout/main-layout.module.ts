import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../components/footer/footer.module';
import { HeaderModule } from '../components/header/header.module';
import { MainLayoutComponent } from './main-layout.component';
import { MainModule } from '../pages/main-page/main.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    MainLayoutComponent,
    MainModule,
  ],
})
export class MainLayoutModule {}
