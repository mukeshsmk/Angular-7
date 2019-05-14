import { Component, OnInit } from '@angular/core';

@Component({
  // trypes of selectors
  // selector: 'app-test',
  // selector: '.app-test',
  // selector: '[app-test]',

  selector: 'app-test',
  template: `
            <div>
            <h1>Test Works</h1>
           
            </div>`,
  styles: [`div{
    color:red;
  }`
  ]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
