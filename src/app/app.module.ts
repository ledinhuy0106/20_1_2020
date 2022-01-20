import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ListHomeComponent } from './component/list-home/list-home.component';
import { CreateHomeComponent } from './component/create-home/create-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListHomeComponent,
    CreateHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
