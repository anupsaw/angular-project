import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzFormComponent } from './form.component';
import { SzFromGroupComponent } from './from-group/from-group.component';
import { SzFromGroupDirective } from './from-group/from-group.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import {
  SzInputModule, SzSelectModule, SzRadioGroupModule,
  SzRadioModule, SzTextareaModule, SzCheckboxModule, SzAutoCompleteModule
} from '@sahaz/mool';

@NgModule({
  declarations: [SzFormComponent, SzFromGroupComponent, SzFromGroupDirective],
  imports: [
    CommonModule, ReactiveFormsModule, MatFormFieldModule,
    SzInputModule, SzSelectModule,
    SzRadioGroupModule, SzRadioModule, SzTextareaModule, SzCheckboxModule, SzAutoCompleteModule
  ], exports: [SzFormComponent, SzFromGroupComponent, SzFromGroupDirective]
})
export class SzFormModule { }
