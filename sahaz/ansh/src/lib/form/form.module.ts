import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzFormComponent } from './form.component';

@NgModule({
  declarations: [SzFormComponent],
  imports: [
    CommonModule
  ], exports: [SzFormComponent]
})
export class SzFormModule { }
