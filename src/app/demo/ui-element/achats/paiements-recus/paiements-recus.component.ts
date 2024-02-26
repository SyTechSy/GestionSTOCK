import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paiements-recus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paiements-recus.component.html',
  styleUrls: ['./paiements-recus.component.scss']
})
export default class PaiementsRecusComponent {
  constructor() {}
}
