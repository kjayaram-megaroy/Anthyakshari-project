import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatchingRoomComponent } from './matching-room/matching-room.component';
import { HomepageReusecodeComponent } from './homepage-reusecode/homepage-reusecode.component';
import { CompleteOnlineComponent } from './complete-online/complete-online.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';




@NgModule({
  declarations: [
    AppComponent,ChangePasswordComponent, HomeComponent, MatchingRoomComponent, HomepageReusecodeComponent, CompleteOnlineComponent,ForgotPasswordComponent,
     LandingpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,HttpClientModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
