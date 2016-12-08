import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, MenuComponent, FirstScreenComponent, RestScreenComponent, ReviewComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FirstScreenComponent,
    RestScreenComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
