import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }   from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { environmentCredentials as env } from 'src/environments/environment';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, JwtModule.forRoot({
      ...env.jwt
  }),
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
