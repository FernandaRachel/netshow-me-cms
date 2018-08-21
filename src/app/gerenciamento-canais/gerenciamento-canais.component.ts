import { Component, OnInit } from '@angular/core';
declare var require: any;
var jsonCanais = require('./dados-json.json');


@Component({
  selector: 'app-gerenciamento-canais',
  templateUrl: './gerenciamento-canais.component.html',
  styleUrls: ['./gerenciamento-canais.component.css']
})
export class GerenciamentoCanaisComponent implements OnInit {

  canalLista:any[];

  constructor() { }

  ngOnInit() {
    this.canalLista = jsonCanais;
    console.log(jsonCanais);
  }

}
