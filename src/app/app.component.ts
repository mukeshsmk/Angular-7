import { Component } from '@angular/core';
import { ExampleServices } from '../app/services/example.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title:string;
  
  constructor( private _exampleservices:ExampleServices){

  }
  ngOnInit() {
   this.title = this._exampleservices.someMethod();
  }

}
