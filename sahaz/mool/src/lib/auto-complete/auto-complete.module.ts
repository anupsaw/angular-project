import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzAutoCompleteComponent } from './auto-complete.component';
import { MatInputModule, MatAutocompleteModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SzErrorModule } from '@sahaz/kand';

@NgModule({
  declarations: [SzAutoCompleteComponent],
  imports: [
    CommonModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule, ReactiveFormsModule, SzErrorModule
  ],
  exports: [SzAutoCompleteComponent],
  entryComponents: [SzAutoCompleteComponent]
})
export class SzAutoCompleteModule { }
