export type TalentProfile = {
  id: string;
  birthdate: Date;
};

export type Methods = {
  get: {
    resBody: TalentProfile[];
    reqHeaders: {
      Authorization: string;
    };
    query?: {
      take: number;
      cursor: number;
    };
  };
  post: {
    resBody: TalentProfile;
    reqBody: TalentProfile;
    reqHeaders: {
      Authorization: string;
    };
  };
};
