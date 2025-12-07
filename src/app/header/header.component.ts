import { Component } from '@angular/core';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-header',
  standalone:false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private tasksService: TasksService) {}

  onResetTasks() {
    this.tasksService.resetToDefaults();
    // reload so components pick up the restored tasks
    window.location.reload();
  }

}
