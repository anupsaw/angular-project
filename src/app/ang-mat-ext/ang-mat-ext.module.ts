import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { AngMatExtComponent } from './ang-mat-ext.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatErrorExtDirective } from './mat-error-ext.directive';

@NgModule({
  declarations: [AngMatExtComponent, MatErrorExtDirective],
  imports: [
    CommonModule,
    MatInputModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule
  ],
  exports: [AngMatExtComponent, MatErrorExtDirective]
})
export class AngMatExtModule { }
