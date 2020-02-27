import { Component, OnInit } from '@angular/core';
import { ImageService } from './image-upload.service'
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage'

class ImageSnippet {
  pending: boolean = false;
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'image-upload-container',
  templateUrl: 'image-upload.component.html',
  styleUrls: ['image-upload.component.scss']
})
export class ImageUploadComponent {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  
  constructor(private afStorage: AngularFireStorage){}

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);  }
}