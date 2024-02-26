import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-factures-des-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './factures-des-clients.component.html',
  styleUrls: ['./factures-des-clients.component.scss']
})
export default class FacturesDesClientsComponent {
  constructor() {}
}
