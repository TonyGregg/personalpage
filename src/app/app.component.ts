import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //backgroundImage = require('../images/header-bg.jpg');
  getBakgroundImg() {
    return "url('../images/header-bg.jpg')";
  }
}
