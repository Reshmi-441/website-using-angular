import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarousalComponent } from './carousal/carousal.component';
import { TextComponent } from './text/text.component';
import { HomeComponent } from './pages/home/home.component';
import { DistrictComponent } from './pages/district/district.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarousalComponent,
    TextComponent,
    HomeComponent,
    DistrictComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
