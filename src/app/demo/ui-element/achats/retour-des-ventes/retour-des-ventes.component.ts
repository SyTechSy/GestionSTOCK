import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-retour-des-ventes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './retour-des-ventes.component.html',
  styleUrls: ['./retour-des-ventes.component.scss']
})
export default class RetourDesVentesComponent {
  constructor() {}
}
