import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seuil-des-stocks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seuil-des-stocks.component.html',
  styleUrls: ['./seuil-des-stocks.component.scss']
})
export default class SeuilDesStocksComponent {
  constructor() {}
}
