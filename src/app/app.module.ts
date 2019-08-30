import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng5SliderModule } from 'ng5-slider';

// layouts
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AppNavbarComponent } from './_layout/app-layout/app-navbar/app-navbar.component';
import { AppFooterComponent } from './_layout/app-layout/app-footer/app-footer.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from './_layout/login-layout/login-layout.component';
import { LoginNavbarComponent } from './_layout/login-layout/login-navbar/login-navbar.component';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ContactComponent } from './contact/contact.component';
import { LoansComponent } from './loans/loans.component';
import { LoanCardComponent } from './loans/loan-card/loan-card.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { SimulationComponent } from './simulation/simulation.component';
import { FormApplicationComponent } from './loan-application/form-application/form-application.component';
import { FaqBotComponent } from './faq-bot/faq-bot.component';
import { BotApplicationComponent } from './loan-application/bot-application/bot-application.component';
import { FaqBotIconComponent } from './faq-bot/faq-bot-icon/faq-bot-icon.component';

@NgModule({
   declarations: [
      AppComponent,
      AppLayoutComponent,
      LoginLayoutComponent,
      LoginNavbarComponent,
      AdminLayoutComponent,
      HomeComponent,
      AboutComponent,
      LoginComponent,
      NotFoundComponent,
      HomeAdminComponent,
      ContactComponent,
      AppFooterComponent,
      AppNavbarComponent,
      LoansComponent,
      LoanCardComponent,
      GetStartedComponent,
      HowItWorksComponent,
      SimulationComponent,
      BotApplicationComponent,
      FormApplicationComponent,
      FaqBotComponent,
      FaqBotIconComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      Ng5SliderModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
