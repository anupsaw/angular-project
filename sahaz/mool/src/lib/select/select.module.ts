import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzSelectComponent } from './select.component';
import { MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SzErrorModule } from '@sahaz/kand';

@NgModule({
  declarations: [SzSelectComponent],
  imports: [
    CommonModule, MatInputModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule, SzErrorModule
  ],
  exports: [SzSelectComponent]
})
export class SzSelectModule { }
