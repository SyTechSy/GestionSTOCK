import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-suivi-inventaire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suivi-inventaire.component.html',
  styleUrls: ['./suivi-inventaire.component.scss']
})
export default class SuiviInventaireComponent {
  constructor() {}
}
