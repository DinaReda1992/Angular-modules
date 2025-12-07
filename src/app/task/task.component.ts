import { Component,Input,Output,EventEmitter, inject } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks/tasks.service';


@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
@Input({required:true}) task!: Task;
// @Output() taskCompleted = new EventEmitter<string>();

private tasksService = inject(TasksService);

onComplete() {
    this.tasksService.RemoveTask(this.task.id);
}

} 