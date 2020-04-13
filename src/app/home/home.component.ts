import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <po-page-default p-title="Home DashBoard">
      <p>
        home works!
      </p>
    </po-page-default>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
