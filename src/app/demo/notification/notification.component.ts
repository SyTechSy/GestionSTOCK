import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export default class NotificationComponent {
  constructor() {}
}
