import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonComponent],
})
export class SharedModule {}
