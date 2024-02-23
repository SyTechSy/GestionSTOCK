// angular import
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import


@Component({
  selector: 'app-dash-analytics',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss']
})
export default class DashAnalyticsComponent {

  // constructor
  constructor() {
  }

}
