import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  exports: [...modules]
})
export class MaterialsModule { }
