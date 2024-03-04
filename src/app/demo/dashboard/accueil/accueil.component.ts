import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export default class AccueilComponent implements OnInit {
  // constructor

  constructor() {}


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
