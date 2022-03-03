import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/header/search/search.component';
import { ProfileComponent } from './components/header/profile/profile.component';
import { ShoppingCartComponent } from './components/header/shopping-cart/shopping-cart.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
// import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MainModule } from './pages/main-page/main.module';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { ButtonComponent } from './shared/components/button/button.component';
// import { ButtonComponent } from './shared/components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    ProfileComponent,
    ShoppingCartComponent,
    AuthPageComponent,
    ShoppingCartPageComponent,
    // MainPageComponent,
    ProductDetailsPageComponent,
    ProfilePageComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    FormsModule,
    // ButtonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
