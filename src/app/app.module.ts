import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
