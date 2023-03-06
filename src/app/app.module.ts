import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderToolbarComponent } from './components/header/header-toolbar/header-toolbar.component';
import { DrawerComponent } from './components/header/drawer/drawer.component';
import { SignInComponent } from './components/header/sign-in/sign-in.component';
import { CartComponent } from './components/header/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    DrawerComponent,
    SignInComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
