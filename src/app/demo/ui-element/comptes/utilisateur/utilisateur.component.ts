import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export default class UtilisateurComponent {
  constructor() {}
}
