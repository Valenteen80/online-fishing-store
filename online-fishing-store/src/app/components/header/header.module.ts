import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SearchComponent } from './search/search.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProfileComponent,
    SearchComponent,
    ShoppingCartComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
