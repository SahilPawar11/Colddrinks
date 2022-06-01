import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FooterComponent } from './header/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { FruitjuiceComponent } from './pages/fruitjuice/fruitjuice.component';
import { LemonadeComponent } from './pages/lemonade/lemonade.component';
import { SodaComponent } from './pages/soda/soda.component';
import { SportdrinkComponent } from './pages/sportdrink/sportdrink.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AboutusComponent,
    ShopComponent,
    FruitjuiceComponent,
    LemonadeComponent,
    SodaComponent,
    SportdrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
