import { TalentProfile } from '..';

export type Methods = {
  get: {
    resBody: TalentProfile;
    reqHeaders: {
      Authorization: string;
    };
  };
  patch: {
    resBody: TalentProfile;
    reqBody: TalentProfile;
    reqHeaders: {
      Authorization: string;
    };
  };
  delete: {
    resBody: TalentProfile;
    reqHeaders: {
      Authorization: string;
    };
  };
};
