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
  id: number;
  firmenname: string;
  website: string;
  strasse: string;
  plz: number;
  ort: string;
  firmenportrait: string;
  lehrstellen: Lehrstelle[];
};

export type Lehrstelle = {
  id: number;
  startjahr: number;
  stellenanzahl: number;
  lehrberuf: Lehrberuf;
};

export type Lehrberuf = {
  id: number;
  bezeichnung: string;
};

export type Talent = {
  id: number;
  plz: number;
  wohnort: string;
  lehrbeginn: string;
  campus: Campus;
  wunschberufe: Lehrberuf[];
  benutzer: Benutzer;
};

export type Campus = {
  id: number;
  bezeichnung: string;
  strasse: string;
  plz: number;
  ort: string;
};
