import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OurmenuComponent } from './ourmenu/ourmenu.component';
import { OurshopComponent } from './ourshop/ourshop.component';
import { ShopdetailsComponent } from './shopdetails/shopdetails.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { AboutusComponent } from './auboutus/aboutus.component';
import { OurchefComponent } from './ourchef/ourchef.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FaqComponent } from './faq/faq.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutusComponent,
  },
  {
    path: 'ourmenu',
    component: OurmenuComponent,
  },
  {
    path: 'ourshop',
    component: OurshopComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'ourchef',
    component: OurchefComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'shoppingcart',
    component: ShoppingcartComponent,
  },
  {
    path: '**',
    component: ErrorComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    OurmenuComponent,
    OurshopComponent,
    ShopdetailsComponent,
    ShoppingcartComponent,
    BlogComponent,
    BlogdetailComponent,
    AboutusComponent,
    OurchefComponent,
    CheckoutComponent,
    FaqComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
