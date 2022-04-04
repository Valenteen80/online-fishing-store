import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [CommonModule, ButtonComponent, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
