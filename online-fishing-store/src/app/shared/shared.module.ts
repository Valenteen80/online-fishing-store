import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, ButtonComponent],
})
export class SharedModule {}
