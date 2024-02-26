import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mes-commande',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mes-commande.component.html',
  styleUrls: ['./mes-commande.component.scss']
})
export default class MesCommandeComponent {
  constructor() {}

}
