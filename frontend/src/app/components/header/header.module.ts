import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SearchComponent } from './search/search.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    ProfileComponent,
    SearchComponent,
    ShoppingCartComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
