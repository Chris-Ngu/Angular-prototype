import { Component } from "@angular/core";

@Component({
    selector: 'app-users-list',
    templateUrl: "./userList.component.html",
    // styleUrls: ["./userLIst.component.css"]
})

export class userListComponent {
    newUserName: string = "";
    newAge: number = -1;

    // testUsers = ['Jack', "John", "Jim"];
    users = [
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
        if (this.newUserName.length === 0 || this.newAge === -1) {
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
    }
}