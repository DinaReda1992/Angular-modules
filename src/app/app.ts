import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('maxillian');
  users = DUMMY_USERS;
  selectedUserId?: string;



  get selectedUser() {
    return this.users.find((user)=>user.id===this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    // console.log('Selected user ID:', id);
  }
}
