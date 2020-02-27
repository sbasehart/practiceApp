import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

    constructor(private http: HttpClient, private afStorage: AngularFireStorage) {}
  
    public uploadImage(event) {  
      return this.afStorage.upload('/upload/to/this-path', event.target.files[0]);  
    }
    private log(message: string) {
      console.log(message);
    }
}