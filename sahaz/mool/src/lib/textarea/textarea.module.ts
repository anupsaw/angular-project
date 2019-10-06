import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzTextareaComponent } from '../textarea/textarea.component';
import { MatInputModule, MatRadioModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SzErrorModule } from '@sahaz/kand';

@NgModule({
  declarations: [SzTextareaComponent],
  imports: [
    CommonModule, MatInputModule, MatRadioModule, MatFormFieldModule, ReactiveFormsModule, SzErrorModule
  ],
  exports: [SzTextareaComponent],
  entryComponents: [SzTextareaComponent]
})
export class SzTextareaModule { }
