import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export default class ProduitsComponent {
  constructor() {}
}
