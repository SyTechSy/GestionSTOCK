import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-abonnement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.scss']
})
export default class AbonnementComponent {
  constructor() {}
}
