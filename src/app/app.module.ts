import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { InputDivComponent } from './components/input-div/input-div.component';
import {FormsModule} from "@angular/forms";
import { IsValidDirective } from './directive/is-valid.directive';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    InputDivComponent,
    IsValidDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
