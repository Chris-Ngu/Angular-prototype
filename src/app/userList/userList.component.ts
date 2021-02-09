import { Component, Input } from "@angular/core";
import { user } from '../types';

@Component({
    selector: 'app-users-list',
    templateUrl: "./userList.component.html",
    styleUrls: ["./userLIst.component.css"]
})

export class userListComponent {
    newUserName: string;
    newAge: number;
    @Input() users: user[];

    constructor() {
        this.users = [];
        this.newAge = 0;
        this.newUserName = "";
    }

    removeUser = (userid: number): void => {
        this.users = this.users.filter(user => user.id !== userid);
    }

    setNewUsername = (nameEvent: Event | null): void => {
        this.newUserName = (nameEvent!.target as HTMLInputElement).value;
    }

    setNewAge = (ageEvent: Event | null): void => {
        this.newAge = parseInt((ageEvent!.target as HTMLInputElement).value);
    }

    addUser = (): void => {
        if (this.newUserName.length === 0 || this.newAge <= 0) {
            return;
        }
        const uniqueID = Math.random()
        const newUser = {
            id: uniqueID,
            name: this.newUserName,
            age: this.newAge
        };
        this.users.push(newUser);
        this.newUserName = "";
        this.newAge = 0;
    }
}