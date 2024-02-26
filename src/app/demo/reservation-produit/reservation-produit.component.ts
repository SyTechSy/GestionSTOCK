import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation-produit.component.html',
  styleUrls: ['./reservation-produit.component.scss']
})
export default class ReservationProduitComponent {
  constructor() {}
}
