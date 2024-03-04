import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';


// import { NgChartsModule } from 'ng2-charts';
  
import { ChartConfiguration} from "chart.js";
import { BaseChartDirective } from 'ng2-charts';


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

 

  

  
}
