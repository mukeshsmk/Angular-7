import { Component, OnInit } from '@angular/core';

@Component({
  // trypes of selectors
  // selector: 'app-test',
  // selector: '.app-test',
  // selector: '[app-test]',

  selector: 'app-test',
  template: `
            <div>
            <H1>It Works</H1>
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
