import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';


// import { NgChartsModule } from 'ng2-charts';
  
import { ChartConfiguration} from "chart.js";
import { BaseChartDirective } from 'ng2-charts';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid
} from 'ng-apexcharts';

export type salesChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  stroke: any;
  theme: ApexTheme | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  markers: any;
  grid: ApexGrid | any;
};

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export default class AccueilComponent implements OnInit {
  // constructor

  constructor() {}

  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: false,
  };
  public radarChartLabels: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Bénéfice total' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Revenu total' }
  ];


  // Properties
  today: Date = new Date();
  AutoDate: string= '';
  AutoDateHeure: string= '';
  pipe = new DatePipe('fr-FR');

  // OnInit Lifecycle Hook
  ngOnInit(): void {
    this.updateDateTime();
    // Mettre à jour la date toutes les secondes
    setInterval(() => {
      this.updateDateTime();
    }, 1000);

    // mon chart
    
    
  }

  // Méthode pour mettre à jour la date actuelle
  updateDateTime(): void {
    this.today = new Date();
    this.AutoDate = this.pipe.transform(this.today, ' EEEE, le dd MMMM yyyy', 'fr') ?? '';
    this.AutoDateHeure = this.pipe.transform(this.today, 'HH:mm:ss') ?? '';
  }

  // pour mon table dataTable

 
  chartType = 'line';

  chartDatasets = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];

  chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  chartColors = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  chartOptions: any = {
    responsive: true
  };

  chartClicked(event: any) {
    console.log(event);
  }

  chartHovered(event: any) {
    console.log(event);
  }

  

  
}
