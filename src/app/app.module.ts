import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image/image-upload.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';



@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDv0jJ5Hb35ImDRp9Cur669nbJCYt70Bh4",
      authDomain: "gallindoangular-269517.firebaseapp.com",
      databaseURL: "https://gallindoangular-269517.firebaseio.com",
      projectId: "gallindoangular-269517",
      storageBucket: "gallindoangular-269517.appspot.com",
      messagingSenderId: "108769623315",
      appId: "1:108769623315:web:5803705b479208c986aee6"
    }),
    AngularFireStorageModule,
    AngularFireAuth
  ],
  providers: [
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
