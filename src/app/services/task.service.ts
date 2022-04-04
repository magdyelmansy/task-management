import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private tasks = new BehaviorSubject<Task[]>([]);
  getTasks = this.tasks.asObservable();
  setTasks(newTasks: Task[]){
    this.tasks.next(newTasks);
  };
}
