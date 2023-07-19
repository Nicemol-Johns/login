import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupStatusComponent } from './signup-status/signup-status.component';

const routes: Routes = [
  {path:'signup',component:LoginComponent},
  {path:'signupstatus',component:SignupStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
