import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-commande-des-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commande-des-clients.component.html',
  styleUrls: ['./commande-des-clients.component.scss']
})
export default class CommandeDesClientsComponent {
  constructor() {}
}
