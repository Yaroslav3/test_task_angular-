import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarOpen = false;

  constructor() {
  }

  title = 'app-test';


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
