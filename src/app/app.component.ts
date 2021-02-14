import { Component, } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { userInterface } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: userInterface[];

  constructor(private http: HttpClient) {
    this.users = [];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/users")
      .subscribe((res: any) => {
        console.log("users here: ", res);
        this.users = res;
      })
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
