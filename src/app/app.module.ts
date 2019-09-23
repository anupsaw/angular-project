import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SzSoochiModule } from '@sz-soochi';
import { SzFormsModule } from '@sz-forms'
import { MatBadgeModule } from '@angular/material';
import { AngMatExtModule } from './ang-mat-ext/ang-mat-ext.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SzSoochiModule,
    AngMatExtModule,
    SzFormsModule,
    MatBadgeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
