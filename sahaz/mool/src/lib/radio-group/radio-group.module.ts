import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzRadioGroupComponent } from './radio-group.component';
import { MatInputModule, MatRadioModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SzRadioGroupComponent],
  imports: [
    CommonModule, MatInputModule, MatRadioModule, MatFormFieldModule, ReactiveFormsModule
  ],
  exports: [SzRadioGroupComponent],
  entryComponents: [SzRadioGroupComponent]
})
export class SzRadioGroupModule { }
