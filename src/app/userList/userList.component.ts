import { Component } from "@angular/core";

@Component({
    selector: 'app-users-list',
    templateUrl: "./userList.component.html",
    // styleUrls: ["./userLIst.component.css"]
})

export class userListComponent {
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
    ]
}