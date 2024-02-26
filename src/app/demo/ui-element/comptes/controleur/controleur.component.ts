import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-controleur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controleur.component.html',
  styleUrls: ['./controleur.component.scss']
})
export default class ControleurComponent {
  constructor() {}
}
