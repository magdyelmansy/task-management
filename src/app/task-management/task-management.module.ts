import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagementRoutingModule } from './task-management-routing.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { MaterialsModule } from '../materials/materials.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TasksListComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    TaskManagementRoutingModule,
    MaterialsModule,
    FormsModule
  ]
})
export class TaskManagementModule { }
