/* eslint-disable */
export type Talent = {
  id: number
  vorname: string
  nachname: string
  plz: number
  wohnort: string
  lehrbeginn: string
  campusId: number
}

export type Firma = {
  id: number
  firmenname: string
  website: string
  strasse: string
  plz: number
  ort: string
  firmenportrait: string
}

export type CustomCreateUserData = {
  id: number
  authId: string
  rolleId: number
  talentId: number
  firmaId: number
  password: string
}

export type Benutzer = {
  id: number
  authId: string
  rolleId: number
  talentId: number
  firmaId: number
}

export type Berechtigung = {
  id: number
  bezeichnung: string
}

export type Rolle = {
  id: number
  bezeichnung: string
}

export type BerechtigungRelations = {
  rollen: Rolle[]
}

export type RolleRelations = {
  berechtigungen: Berechtigung[]
  benutzer: Benutzer[]
}

export type BenutzerRelations = {
  rolle: Rolle
  talent: Talent
  firma: Firma
}

export type Campus = {
  id: number
  bezeichnung: string
  standort: string
}

export type Lehrberuf = {
  id: number
  bezeichnung: string
}

export type TalentRelations = {
  campus: Campus
  wunschberufe: Lehrberuf[]
  benutzer: Benutzer[]
}

export type CampusRelations = {
  talente: Talent[]
}

export type Lehrstelle = {
  id: number
  startjahr: string
  stellenanzahl: number
  firmaId: number
  lehrberufId: number
}

export type LehrberufRelations = {
  talente: Talent[]
  lehrstellen: Lehrstelle[]
}

export type FirmaRelations = {
  lehrstellen: Lehrstelle[]
  benutzer: Benutzer[]
}

export type LehrstelleRelations = {
  firma: Firma
  lehrberuf: Lehrberuf
}
