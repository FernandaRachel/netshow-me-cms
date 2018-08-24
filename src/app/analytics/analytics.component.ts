import { Component, OnInit } from '@angular/core';
import { Chart } from '../../../node_modules/angular-highcharts';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Estatísticas de Acesso'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['Jan', 'Fev', 'Março']
  },
    series: [
      {
        name: 'Usuários Mensais',
        data: [100, 250, 150]
      },
      {
        name: 'Usuários não Mensais',
        data: [200, 100, 150]
      }
    ]
  });


  chart2 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Estatísticas de Acesso'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['Jan', 'Fev', 'Março']
  },
    series: [
      {
        name: 'Usuários Mensais',
        data: [180, 210, 150]
      },
      {
        name: 'Usuários não Mensais',
        data: [90, 170, 130]
      }
    ]
  });

  ngOnInit() {
  }
}
