import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from '../app/test/test.component';
import { ClassBindingComponent } from '../app/class-binding/class-binding.component';
import { BindingComponent } from '../app/binding/binding.component';
import { HeaderComponent } from '../app/header/header.component';
import { SignupComponent } from '../app/signup/signup.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'classbinding', component: ClassBindingComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'signup', component: SignupComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
