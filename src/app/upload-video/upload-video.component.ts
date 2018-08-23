import { Validators, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UploadService } from './../auth/upload.service';
import { Component, OnInit } from '@angular/core';
declare var require: any;
var jsonCanais = require('./dados-videos-json.json');

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {

  enviado: boolean;
  videoForm: FormGroup;
  videosLista: any[];

  constructor(private uploadService: UploadService,
    private formBuilder: FormBuilder, ) { }

  ngOnInit(): void {
    this.videoForm = this.formBuilder.group({
      url: ['', Validators.required],
      nome: ['', Validators.required]
    });
    this.videosLista = jsonCanais;
    console.log(jsonCanais);
  }


  enviar() {
    this.enviado = false;
    const url = this.videoForm.get('url').value;
    const nome = this.videoForm.get('nome').value;
    const dataCriacao = Date.now.toString();

    this.uploadService.uploadoVideo(url, dataCriacao, nome);
    
    this.enviado = true;
  }
}
