import { Component, OnInit } from '@angular/core';
declare var require: any;
var jsonCanais = require('./dados-videos-json.json');

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {

  videosLista:any[];

  constructor() { }

  ngOnInit() {
    this.videosLista = jsonCanais;
    console.log(jsonCanais);
  }

}
