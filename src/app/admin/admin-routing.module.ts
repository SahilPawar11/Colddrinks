import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../pages/aboutus/aboutus.component';
import { FruitjuiceComponent } from '../pages/fruitjuice/fruitjuice.component';
import { HomeComponent } from '../pages/home/home.component';
import { LemonadeComponent } from '../pages/lemonade/lemonade.component';
import { LoginComponent } from '../pages/login/login.component';
import { ShopComponent } from '../pages/shop/shop.component';
import { SodaComponent } from '../pages/soda/soda.component';
import { SportdrinkComponent } from '../pages/sportdrink/sportdrink.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
 {path:'aboutus',component:AboutusComponent},
 {path:'login',component:LoginComponent},
  {path:'shop',component:ShopComponent},
  {path:'fruitjuice',component:FruitjuiceComponent},
  {path:'lemonade',component:LemonadeComponent},
  {path:'soda',component:SodaComponent},
  {path:'sportdrink',component:SportdrinkComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
