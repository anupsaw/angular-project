import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SzInputModule } from '@sahaz/mool';
import { SzErrorModule } from '@sahaz/kand';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatBadgeModule } from '@angular/material';
import { SzSelectModule } from '@sahaz/mool';
import { SzFormModule } from '@sahaz/ansh';
import { ReactiveFormsModule } from '@angular/forms';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
