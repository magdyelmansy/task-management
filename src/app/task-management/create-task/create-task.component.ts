import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }
  task: Task = new Task();
  tasks: Task[];

  ngOnInit(): void {
    this.taskService.getTasks.subscribe({
      next: (res: Task[]) => {
        this.tasks = res
      },
      error: (err) => { console.log(err) }
    })
  }
  create() {
    this.task.id = this.tasks.length + 1;
    this.tasks.unshift(this.task)
    this.taskService.setTasks(this.tasks);
    this.task = new Task();
  }
}
