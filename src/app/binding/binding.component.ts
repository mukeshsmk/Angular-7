import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
  <h2>Welcome {{name}}</h2>
  <h2>{{2+2}}</h2>
  <h2>{{getUser()}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{location}}</h2>
  `,
  styles: [`
  h2{
   
  }`]
})
export class BindingComponent implements OnInit {

  public name = "Mukesh kumar!"
  public location = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  getUser(){
    return "Hello " + this.name;
  }

}
