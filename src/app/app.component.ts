import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cov Manage';
  theme: string;

  constructor() {
      this.theme = "theme-teal";
  }

  ngOnInit() {
  }
}
