enum Role {
  TALENT,
  COMPANY,
  ADMIN,
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
