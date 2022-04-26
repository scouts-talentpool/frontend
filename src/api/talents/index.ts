export type TalentProfile = {
  id: string;
  firstname: string;
  lastname: string;
  birthdate: string;
};

export type Methods = {
  get: {
    resBody: TalentProfile[];
    reqHeaders: {
      Authorization: string;
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
