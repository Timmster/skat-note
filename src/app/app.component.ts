import { Component, VERSION } from '@angular/core';
import { SkatSpiel, SPIELE } from './skatspiel';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  spiele = SPIELE;
  spieler = ['Margrethe', 'Wencke', 'Timm'];

  ergebnisse: Map<string, number> = new Map();

  constructor() {}

  getErgebnis(spieler: string, spiel: SkatSpiel) {
    return this.ergebnisse.get(spieler + '_' + spiel.name);
  }
}
