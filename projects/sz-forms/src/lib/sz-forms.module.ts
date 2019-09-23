import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroupDirective, FormControlDirective } from '@angular/forms';

import { SzFormsComponent } from './components/forms/sz-forms.component';
import { SzInputComponent } from './components/sz-input/sz-input.component';
import { SzInputConfigDirective } from './directives/input-config/input-config.directive';
import { SzSelectComponent } from './sz-select/sz-select.component';
import { SzDynamicComponent } from './sz-dynamic/sz-dynamic.component';

@NgModule({
  declarations: [SzFormsComponent, SzInputComponent, SzInputConfigDirective, SzSelectComponent, SzDynamicComponent],
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  exports: [SzFormsComponent, SzInputComponent],
  providers: [],
  entryComponents: [SzInputComponent]
})
export class SzFormsModule {


}
