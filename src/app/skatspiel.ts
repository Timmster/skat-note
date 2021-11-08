class SkatErgebnis {
  constructor(public name: string, public points: number) {}
}

export class SkatSpiel {
  constructor(public name: string, public ergebnisse: SkatErgebnis[]) {}
}

const KARO = new SkatSpiel('Karo', [
  new SkatErgebnis('0+', 0),
  new SkatErgebnis('31+', 1),
  new SkatErgebnis('61+', 3),
  new SkatErgebnis('91+', 4),
]);

const HERZ = new SkatSpiel('Herz', [
  new SkatErgebnis('0+', 0),
  new SkatErgebnis('31+', 1),
  new SkatErgebnis('61+', 3),
  new SkatErgebnis('91+', 4),
]);

const PIK = new SkatSpiel('Pik', [
  new SkatErgebnis('0+', 0),
  new SkatErgebnis('31+', 1),
  new SkatErgebnis('61+', 4),
  new SkatErgebnis('91+', 5),
]);

const KREUZ = new SkatSpiel('Kreuz', [
  new SkatErgebnis('0+', 0),
  new SkatErgebnis('31+', 1),
  new SkatErgebnis('61+', 4),
  new SkatErgebnis('91+', 5),
]);

const GRAND = new SkatSpiel('Grand', [
  new SkatErgebnis('0+', 0),
  new SkatErgebnis('31+', 1),
  new SkatErgebnis('61+', 5),
  new SkatErgebnis('91+', 6),
]);

const NULL = new SkatSpiel('Null', [
  new SkatErgebnis('Verloren', 0),
  new SkatErgebnis('', -1),
  new SkatErgebnis('Gewonnen', 3),
  new SkatErgebnis('', -1),
]);

const CHANCE = new SkatSpiel('Chance', [
  new SkatErgebnis('0+', 0),
  new SkatErgebnis('31+', 1),
  new SkatErgebnis('61+', 3),
  new SkatErgebnis('91+', 4),
]);

export const SPIELE: SkatSpiel[] = [
  KARO,
  HERZ,
  PIK,
  KREUZ,
  GRAND,
  NULL,
  CHANCE,
];
