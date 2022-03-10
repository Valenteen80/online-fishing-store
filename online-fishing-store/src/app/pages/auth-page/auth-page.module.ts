import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './auth-page.component';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule],
  exports: [AuthPageComponent],
})
export class AuthPageModule {}
