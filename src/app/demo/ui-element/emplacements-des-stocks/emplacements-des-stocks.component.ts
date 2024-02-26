import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-emplacements-des-stocks',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './emplacements-des-stocks.component.html',
  styleUrls: ['./emplacements-des-stocks.component.scss']
})
export default class EmplacementsDesStocksComponent {
  constructor() {}
}
