import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layouts
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from './_layout/login-layout/login-layout.component';

// admin components
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';

// components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { LoansComponent } from './loans/loans.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { SimulationComponent } from './simulation/simulation.component';
import { FormApplicationComponent } from './loan-application/form-application/form-application.component';
import { BotApplicationComponent } from './loan-application/bot-application/bot-application.component';

const routes: Routes = [
  // app layout
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'how-it-works', component: HowItWorksComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'loans', component: LoansComponent },
      { path: 'get-started', component: GetStartedComponent },
      { path: 'form-application', component: FormApplicationComponent },
      { path: 'bot-application', component: BotApplicationComponent },
      { path: 'simulation', component: SimulationComponent },
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
  // not found page
  { path: 'not-found', component: NotFoundComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
