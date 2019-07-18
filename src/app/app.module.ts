import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ApicallService } from './services/apicall.service';
import { SignupComponent } from './pages/signup/signup.component';
import { ReceivepwdComponent } from './pages/receivepwd/receivepwd.component';
import { ResetpwdComponent } from './pages/resetpwd/resetpwd.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';// module imported for http calls


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ReceivepwdComponent,
    ResetpwdComponent,
    DashboardComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [ApicallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
