import { Component, Input, Output, EventEmitter } from "@angular/core";
import { userInterface } from '../types';

@Component({
    selector: 'app-users-list',
    templateUrl: "./userList.component.html",
    styleUrls: ["./userLIst.component.css"]
})

export class userListComponent {
    newUserName: string;
    newAge: number;
    @Input() users: userInterface[];
    @Output() removeUser = new EventEmitter()
    @Output() addUserEvent = new EventEmitter()

    constructor() {
        this.users = [];
        this.newAge = 0;
        this.newUserName = "";
    }

    setNewUsername = (nameEvent: Event | null): void => {
        this.newUserName = (nameEvent!.target as HTMLInputElement).value;
    }

    setNewAge = (ageEvent: Event | null): void => {
        this.newAge = parseInt((ageEvent!.target as HTMLInputElement).value);
    }

    addUser = (name: string): void => {
        if (this.newUserName.length > 0 && this.newAge !== 0) {
            this.addUserEvent.emit({
                username: this.newUserName,
                age: this.newAge
            });
            this.newUserName = "";
            this.newAge = 0;
        }
    }
}