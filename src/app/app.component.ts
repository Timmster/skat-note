import { Component, VERSION } from '@angular/core';
import { SPIELE } from './skatspiel';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  spiele = SPIELE;
  spieler = ['Margrethe', 'Wencke', 'Timm'];
}
