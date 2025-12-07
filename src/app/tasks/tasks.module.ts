import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { Card } from '../shared/card/card';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { UserComponent } from '../user/user.component';

@NgModule({
    declarations: [
        TasksComponent,
        TaskComponent,
        NewTaskComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ],
    exports: [
        TasksComponent,
        UserComponent
        

    ]
})
export class TasksModule { }