export enum Role {
  TALENT = 'TALENT',
  COMPANY = 'COMPANY',
  ADMIN = 'ADMIN',
}

export type User = {
  id: string;
  role: Role;
  talentProfileId?: string;
  companyProfileId?: string;
};

export type Methods = {
  get: {
    resBody: User[];
    reqHeaders: {
      Authorization: string;
    };
  };
};
