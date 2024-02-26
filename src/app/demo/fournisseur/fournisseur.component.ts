import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export default class FournisseurComponent {
  constructor() {}
}
