import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/app-contact.component';
import { LoginComponent } from './components/login/app-login.component';

const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'contact'
},
{
  path: 'contact',
  component: ContactComponent
}, {
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
