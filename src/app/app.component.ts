import { Component } from '@angular/core';
import { userInterface } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: userInterface[];

  constructor() {
    this.users = [
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
  }


  removeUser = (userid: number): void => {
    this.users = this.users.filter(user => user.id !== userid);
  }

  addUser = (arg: any): void => {
    const uniqueID = Math.random()
    const newUser: userInterface = {
      id: uniqueID,
      name: arg.username,
      age: arg.age
    };
    this.users.push(newUser);
  }

  title = 'angular-tutorial';
}
