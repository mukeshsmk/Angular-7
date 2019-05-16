import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleServices } from '../app/services/example.services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BindingComponent } from './binding/binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';

import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BindingComponent,
    ClassBindingComponent,
    HeaderComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ExampleServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
