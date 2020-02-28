import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image/image-upload/image-upload.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ImageComponent } from './image/image.component';
import { ImageDetailsComponent } from './image/image-details/image-details.component';
import { ImageEditComponent } from './image/image-edit/image-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    HomeComponent,
    AdminComponent,
    ImageComponent,
    ImageDetailsComponent,
    ImageEditComponent,
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
  ],
  providers: [
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
