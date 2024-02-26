import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-administrateur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.scss']
})
export default class AdministrateurComponent {
  constructor() {}
}
