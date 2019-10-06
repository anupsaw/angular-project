import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { SzErrorModule } from '@sahaz/kand';
import { SzInputComponent } from './input.component';

@NgModule({
  declarations: [SzInputComponent],
  imports: [
    CommonModule, MatInputModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule, SzErrorModule
  ],
  exports: [SzInputComponent],
  entryComponents: [SzInputComponent]
})
export class SzInputModule { }
