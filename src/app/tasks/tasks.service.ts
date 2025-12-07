import { Injectable } from '@angular/core';
import { NewTask } from '../new-task/new-task.model';
import { dummyTasks } from '../dummy-tasks';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks=[
     {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

constructor() {
  const tasksJson = localStorage.getItem('tasks');
  if (tasksJson) {
    try {
      const parsed = JSON.parse(tasksJson);
      // If stored tasks exist and are non-empty, use them. Otherwise keep bundled defaults.
      if (Array.isArray(parsed) && parsed.length > 0) {
        this.tasks = parsed;
      } else {
        // persist the in-memory defaults so storage is seeded
        this.saveTasksToStorage();
      }
    } catch (e) {
      // If parsing fails, fall back to defaults and overwrite storage
      this.saveTasksToStorage();
    }
  } else {
    // No stored tasks — seed storage with bundled defaults
    this.saveTasksToStorage();
  }
}

/**
 * Reset tasks to the bundled defaults and persist to localStorage.
 */
resetToDefaults() {
  this.tasks = [...dummyTasks];
  this.saveTasksToStorage();
}

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  AddTaskToUser(userId: string, task: NewTask) {
    this.tasks.push({
      id: 't' + (this.tasks.length + 1),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });
    this.saveTasksToStorage();
  }

  RemoveTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasksToStorage();
  }

  private saveTasksToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}   