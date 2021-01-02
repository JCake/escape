import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeypadComponent } from './keypad/keypad.component';
import { PadlockComponent } from './padlock/padlock.component';

@NgModule({
  declarations: [
    AppComponent,
    KeypadComponent,
    PadlockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
