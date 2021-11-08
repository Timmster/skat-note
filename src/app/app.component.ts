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

  // ergebnisse: Map<string, string> = new Map();

  constructor() {}

  getErgebnis(spieler: string, spiel: SkatSpiel) {
    return localStorage.getItem(spieler + '_' + spiel.name);
    // return this.ergebnisse.get(spieler + '_' + spiel.name);
  }

  setErgebnis(spieler: string, spiel: SkatSpiel, punkte: number) {
    if (this.isErgebnis(spieler, spiel, punkte)) {
      // this.ergebnisse.delete(spieler + '_' + spiel.name);
      localStorage.setItem(spieler + '_' + spiel.name, null);
    } else {
      localStorage.setItem(spieler + '_' + spiel.name, punkte + '');
      // this.ergebnisse.set(spieler + '_' + spiel.name, punkte + '');
    }
  }

  isErgebnis(spieler: string, spiel: SkatSpiel, punkte: number) {
    const pStr = punkte + '';
    return this.getErgebnis(spieler, spiel) == pStr;
  }

  getGesamt(spieler: string) {
    let result = 0;
    this.spiele.forEach((spiel) => {
      const r = Number.parseInt(this.getErgebnis(spieler, spiel));
      result += isNaN(r) ? 0 : r;
    });
    return result;
  }
}
