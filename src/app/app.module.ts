import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { RadioComponent } from './radio/radio.component';
import { PipesComponent } from './pipes/pipes.component';
import { RemoveElemetnComponent } from './remove-elemetn/remove-elemetn.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    RadioComponent,
    PipesComponent,
    RemoveElemetnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
