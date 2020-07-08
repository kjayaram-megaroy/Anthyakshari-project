import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {LandingpageComponent} from './landingpage/landingpage.component';

const routes: Routes = [
  { path: 'forgot-password', component:ForgotPasswordComponent },
  { path: 'landingpage', component:LandingpageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
