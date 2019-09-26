import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SzInputModule } from '@sahaz/mool';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatBadgeModule } from '@angular/material';
import { SzSelectModule } from '@sahaz/mool/src/lib/select/select.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    SzInputModule,
    SzSelectModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
