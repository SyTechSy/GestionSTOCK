import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rapport',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export default class RapportComponent {
  constructor() {}
}
