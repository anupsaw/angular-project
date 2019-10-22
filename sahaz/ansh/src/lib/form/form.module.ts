import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzFormComponent } from './form.component';
import { SzFromGroupComponent } from './from-group/from-group.component';
import { SzFromGroupXComponent } from './from-group/from-group.x.component';
import { SzFromGroupDirective } from './from-group/from-group.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import {
  SzInputModule, SzSelectModule, SzRadioGroupModule,
  SzRadioModule, SzTextareaModule, SzCheckboxModule, SzAutoCompleteModule
} from '@sahaz/mool';

@NgModule({
  declarations: [SzFormComponent, SzFromGroupComponent, SzFromGroupDirective, SzFromGroupXComponent],
  imports: [
    CommonModule, ReactiveFormsModule, MatFormFieldModule,
    SzInputModule, SzSelectModule,
    SzRadioGroupModule, SzRadioModule, SzTextareaModule, SzCheckboxModule, SzAutoCompleteModule
  ],
  exports: [SzFormComponent, SzFromGroupComponent, SzFromGroupXComponent, SzFromGroupDirective],
  entryComponents: [SzFromGroupXComponent]
})
export class SzFormModule { }
