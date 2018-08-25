import { Injectable } from '@angular/core';

import { Observable } from '../../../node_modules/rxjs';
import { Router } from '../../../node_modules/@angular/router';
import { UploadVideo } from './upload';
import { AngularFireDatabase } from "angularfire2/database"; 


@Injectable()
export class UploadService {

    public uploadVideo;

    constructor(public db: AngularFireDatabase) {
        this.uploadVideo = this.db.list('/path');
      }

   

  uploadoVideo(url: string, dataCriacao: string, nome:string) {
    let newUpload = new UploadVideo(url,dataCriacao, nome);
    this.uploadVideo.push(newUpload);
  }

}