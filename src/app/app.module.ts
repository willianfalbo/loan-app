import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from './_layout/login-layout/login-layout.component';
import { ChatbotLayoutComponent } from './_layout/chatbot-layout/chatbot-layout.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';

@NgModule({
   declarations: [
      AppComponent,
      AppLayoutComponent,
      LoginLayoutComponent,
      ChatbotLayoutComponent,
      AdminLayoutComponent,
      HomeComponent,
      AboutComponent,
      LoginComponent,
      ChatbotComponent,
      NotFoundComponent,
      HomeAdminComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
