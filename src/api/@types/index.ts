export type Benutzer = {
  id: number;
  authId: string;
  vorname: string;
  nachname: string;
  email: string;
  rolle: Rolle;
  firma: Firma;
  talent: Talent;
};

export type Rolle = {
  id: number;
  bezeichnung: string;
  berechtigungen: Berechtigung[];
};

export type Berechtigung = {
  id: number;
  bezeichnung: string;
};

export type Firma = {
  id: string;
  firmenname: string;
  strasse: string;
  plz: number;
  ort: string;
  firmenportrait: string;
  lehrstellen: Lehrstelle[];
  links: Link[];
};

export type Lehrstelle = {
  id: number;
  startjahr: number;
  stellenanzahl: number;
  lehrberuf: Lehrberuf;
  ausbildungskonzept: string;
  bewerbungsvorgehen: string;
  ausbildungsorte: string[];
  links: Link[];
};

export type Lehrberuf = {
  id: number;
  bezeichnung: string;
  links: Link[];
};

export type Talent = {
  id: string;
  plz: number;
  wohnort: string;
  abschlussjahr: number;
  meineStaerken: string;
  lieblingsCampusAktivitaet: string;
  campus: Campus;
  wunschberufe: Lehrberuf[];
  benutzer: Benutzer;
  links: Link[];
};

export type Campus = {
  id: number;
  bezeichnung: string;
  strasse: string;
  plz: number;
  ort: string;
  links: Link[];
};

export type Link = {
  id: number;
  text?: string;
  url: string;
};
