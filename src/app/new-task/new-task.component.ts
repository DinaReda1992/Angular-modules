import { Component, Input, Output, inject, EventEmitter } from '@angular/core';
import { Task } from '../task/task.model';
import { NewTask } from '../new-task/new-task.model';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
@Input({required: true}) userId!: string;
@Output() newTask = new EventEmitter<Task>();
@Output() close = new EventEmitter<void>();
enteredTitle = '';
enteredSummary = '';
enteredDueDate = '';
private taskService= inject(TasksService);

createTask(task: Task) {
    this.newTask.emit(task);
}

onCancel() {
    this.close.emit();
  }

  onSubmit(){
    this.taskService.AddTaskToUser(this.userId, {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    });
    this.close.emit();

  }
}
