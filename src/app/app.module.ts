import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {ApiServiceService} from './api-service.service'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(route),
    FormsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    MatCardModule

  ],
  providers: [ApiServiceService],

  bootstrap: [AppComponent]
})
export class AppModule { }
