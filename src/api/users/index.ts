enum Role {
  TALENT,
  COMPANY,
  ADMIN,
}

export type User = {
  id: string;
  role: Role;
  talentProfileId?: number;
  companyProfileId?: number;
};

export type Methods = {
  get: {
    resBody: User[];
    reqHeaders: {
      Authorization: string;
    };
  };
};
