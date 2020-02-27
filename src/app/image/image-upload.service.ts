import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

    constructor(private http: HttpClient, private afStorage: AngularFireStorage) {}

}