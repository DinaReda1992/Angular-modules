import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('maxillian');
  users = DUMMY_USERS;
  // Auto-select the first user so tasks are visible on initial load
  selectedUserId: string | undefined = this.users && this.users.length ? this.users[0].id : undefined;



  get selectedUser() {
    return this.users.find((user)=>user.id===this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log('Selected user ID:', id);
  }
}
