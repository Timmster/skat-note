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

  setErgebnis(spieler: string, spiel: SkatSpiel, punkte: number) {
    if (this.getErgebnis(spieler, spiel) == punkte) {
      this.ergebnisse.delete(spieler + '_' + spiel.name);
    } else {
      this.ergebnisse.set(spieler + '_' + spiel.name, punkte);
    }
  }

  getGesamt(spieler: string) {
    let result = 0;
    this.spiele.forEach((spiel) => {
      const r = this.getErgebnis(spieler, spiel);
      result += isNaN(r) ? 0 : r;
    });
    return result;
  }
}
