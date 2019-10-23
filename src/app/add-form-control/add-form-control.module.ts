import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFormControlComponent } from './add-form-control.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SzFormModule } from '@sahaz/ansh';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { SzInputModule } from '@sahaz/mool';
import { ControlActionButtonComponent } from './control-action-button.component';

const routes: Routes = [{ path: 'add-form-control', component: AddFormControlComponent }];

@NgModule({
  declarations: [AddFormControlComponent, ControlActionButtonComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, SzFormModule, MatIconModule, MatButtonModule, SzInputModule
  ], exports: [AddFormControlComponent, ControlActionButtonComponent, RouterModule],
  entryComponents: [ControlActionButtonComponent]
})
export class AddFormControlModule { }
