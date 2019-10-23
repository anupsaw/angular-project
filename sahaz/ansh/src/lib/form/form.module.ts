import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import {
  SzInputModule, SzSelectModule, SzRadioGroupModule,
  SzRadioModule, SzTextareaModule, SzCheckboxModule, SzAutoCompleteModule
} from '@sahaz/mool';

import { SzFormComponent } from './form.component';
import { SzFromGroupComponent } from './from-group/from-group.component';
import { SzFromGroupXComponent } from './from-group/from-group.x.component';
import { SzFromGroupDirective } from './from-group/from-group.directive';
import { SzControlGroupComponent } from '../control-group/control-group.component';

@NgModule({
  declarations: [SzFormComponent, SzFromGroupComponent, SzFromGroupDirective, SzFromGroupXComponent, SzControlGroupComponent],
  imports: [
    CommonModule, ReactiveFormsModule, MatFormFieldModule,
    SzInputModule, SzSelectModule,
    SzRadioGroupModule, SzRadioModule, SzTextareaModule, SzCheckboxModule, SzAutoCompleteModule
  ],
  exports: [SzFormComponent, SzFromGroupComponent, SzFromGroupXComponent, SzFromGroupDirective, SzControlGroupComponent],
  entryComponents: [SzFromGroupXComponent, SzControlGroupComponent]
})
export class SzFormModule { }
