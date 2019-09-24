import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SzInputModule } from '@sahaz/mool';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatBadgeModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatBadgeModule,
    SzInputModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
