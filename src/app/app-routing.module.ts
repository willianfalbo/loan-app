import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layouts
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from './_layout/login-layout/login-layout.component';
import { ChatbotLayoutComponent } from './_layout/chatbot-layout/chatbot-layout.component';

// admin components
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';

// components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  // app layout
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ]
  },
  // admin layout
  {
    path: 'admin', component: AdminLayoutComponent,
    children: [
      { path: '', component: HomeAdminComponent, pathMatch: 'full' },
      { path: 'home', component: HomeAdminComponent },
    ]
  },
  // login layout
  {
    path: '', component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  // chatbot layout
  {
    path: '', component: ChatbotLayoutComponent,
    children: [
      { path: 'virtual-assistant', component: ChatbotComponent },
    ]
  },
  // not found page
  { path: 'not-found', component: NotFoundComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
