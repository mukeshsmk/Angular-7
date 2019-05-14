import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
  <h1>Welcome {{ title }}</h1>
  <h2 class="text-success">Welcome Angular 7 basics</h2>
  <h2 class="text-danger">Welcome Angular 7 basics</h2>
  <h2 class="text-style">Welcome Angular 7 basics</h2>
  <br>
  <h2 [class]="successClass">Welcome Angular 7 basics</h2>
  <h2 [class.text-danger]="hasError">Welcome Angular 7 basics</h2>
  <h2 [ngClass]="msgClasses">Welcome Angular 7 basics</h2>
  `,
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style: italic;
  }`]
})
export class ClassBindingComponent implements OnInit {
 
  public title = "Class Binding";
  public successClass = "text-success"
  public hasError = false;
  public isSpecial = true;
  public msgClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special": this.isSpecial,
  }

  constructor() { }

  ngOnInit() {
  }

}
