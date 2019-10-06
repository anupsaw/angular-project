import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzCheckboxComponent } from '../checkbox/checkbox.component';
import { MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SzCheckboxComponent],
  imports: [
    CommonModule, MatCheckboxModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule
  ],
  exports: [SzCheckboxComponent],
  entryComponents: [SzCheckboxComponent]
})
export class SzCheckboxModule { }
