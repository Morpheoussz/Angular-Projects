import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ResetpwdComponent } from './pages/resetpwd/resetpwd.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ReceivepwdComponent } from './pages/receivepwd/receivepwd.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path : '', component: DashboardComponent},
  {path : 'login', component: LoginComponent},
  {path : 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
