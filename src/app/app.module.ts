import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SzInputModule, SzCheckboxModule } from '@sahaz/mool';
import { SzErrorModule } from '@sahaz/kand';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatBadgeModule, MatButtonModule, MatIconModule } from '@angular/material';
import { SzSelectModule } from '@sahaz/mool';
import { SzFormModule } from '@sahaz/ansh';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigFormUiModule } from './config-form-ui/config-form-ui.module';
import { AddFormControlModule } from './add-form-control/add-form-control.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    SzErrorModule,
    SzInputModule,
    SzFormModule,
    SzSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    ConfigFormUiModule,
    AddFormControlModule,
    MatButtonModule,
    SzCheckboxModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
