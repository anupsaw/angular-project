import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConfigFormUiComponent } from './config-form-ui.component';
import { SzFormModule } from '@sahaz/ansh';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: 'form-config', component: ConfigFormUiComponent }];

@NgModule({
  declarations: [ConfigFormUiComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), SzFormModule, ReactiveFormsModule
  ],
  exports: [ConfigFormUiComponent]
})
export class ConfigFormUiModule { }
