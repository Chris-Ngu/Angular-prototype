import { Component } from '@angular/core';
import { user } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: user[] = [
    {
      id: 1,
      name: "jack",
      age: 21
    },
    {
      id: 2,
      name: "john",
      age: 25
    },
    {
      id: 3,
      name: "jim",
      age: 29
    }
  ];

  title = 'angular-tutorial';
}
