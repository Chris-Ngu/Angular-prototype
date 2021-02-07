import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { userListComponent } from './userList.component';

@NgModule({
    declarations: [userListComponent],
    imports: [CommonModule],
    exports: [userListComponent]
})

export class UsersListModule { }
