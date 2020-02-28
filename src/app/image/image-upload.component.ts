import { Component, OnInit } from '@angular/core';
import { finalize, map } from 'rxjs/operators';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask, createStorageRef } from 'angularfire2/storage'
import { Observable } from 'rxjs';
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'image-upload-container',
  templateUrl: 'image-upload.component.html',
  styleUrls: ['image-upload.component.scss']
})
export class ImageUploadComponent {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private afStorage: AngularFireStorage, private firebaseApp: FirebaseApp){
    const storageRef = firebaseApp.storage().ref().child('images/image.png');
    storageRef.getDownloadURL().then(url => this.ref = url);
  }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);  
    this.uploadState = this.task.snapshotChanges()
    .pipe(
      map(s => s.state),
      );
    this.uploadProgress = this.task.percentageChanges()
  }
}