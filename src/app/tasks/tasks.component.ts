import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component'; 
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from "../task/task.component";
import {dummyTasks} from '../dummy-tasks';
import { NewTaskComponent } from '../new-task/new-task.component';
import { NewTask } from '../new-task/new-task.model';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
// tasks=[dummyTasks];
@Input({required:true}) userId!: string;
@Input({required:true}) name?: string;
isAddingTask = false;


constructor (private tasksService: TasksService) {
  this.tasksService = tasksService;
}

get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
}

// @Input() user!:{
//     id: string;
//     avatar: string;
//     name: string; 
// }

get user() {
    return DUMMY_USERS.find((user) => user.id === this.userId)!;
}

onTaskCompleted(taskId: string) {
    this.tasksService.RemoveTask(taskId);
}

onStartAddTask() {
   this.isAddingTask = true;
    // this.tasks.push(task);
}
onCloseAddTask() {
   this.isAddingTask = false;
}

// onAddTask(task: NewTask) {
//     this.tasksService.AddTaskToUser(this.userId, task);
//     this.isAddingTask = false;
// }
}