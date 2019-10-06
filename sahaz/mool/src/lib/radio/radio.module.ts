import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzRadioComponent } from '../radio/radio.component';
import { MatRadioModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SzRadioComponent],
  imports: [
    CommonModule, MatInputModule, MatRadioModule, MatFormFieldModule, ReactiveFormsModule
  ],
  exports: [SzRadioComponent],
  entryComponents: [SzRadioComponent]
})
export class SzRadioModule { }
