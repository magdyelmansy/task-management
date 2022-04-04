import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  constructor(private taskService: TaskService) {}

  tasksList: Task[];
  ngOnInit(): void {
    this.taskService.getTasks.subscribe({next: (res:Task[]) => {
      this.tasksList = res;
    }, error: (err) => {console.log(err)}})
  }
  remove(id:number) {
    this.tasksList = this.tasksList.filter(task => task.id !== id)
    this.taskService.setTasks(this.tasksList)
  }
}
