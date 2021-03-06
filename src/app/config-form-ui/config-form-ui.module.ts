import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConfigFormUiComponent } from './config-form-ui.component';
import { SzFormModule } from '@sahaz/ansh';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';

const routes: Routes = [{ path: 'form-config', component: ConfigFormUiComponent }];

@NgModule({
  declarations: [ConfigFormUiComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), SzFormModule, ReactiveFormsModule, MatButtonModule, MatIconModule
  ],
  exports: [ConfigFormUiComponent, RouterModule]
})
export class ConfigFormUiModule { }
