export enum Role {
  TALENT = 'TALENT',
  COMPANY = 'COMPANY',
  ADMIN = 'ADMIN',
}

export type User = {
  id: string;
  role: Role;
  email: string,
  password?: string,
  given_name: string,
  family_name: string,
  talentProfileId?: string;
  companyProfileId?: string;
};

export type Methods = {
  get: {
    resBody: User[];
    reqHeaders: {
      Authorization: string;
    };
    query?: {
      take: number;
      cursor: number;
      role?: Role;
    };
  };
  post: {
    resBody: User,
    reqBody: User,
    reqHeaders: {
      Authorization: string;
    };
  }
};
