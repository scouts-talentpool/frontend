import { CompanyProfile } from '..';

export type Methods = {
  get: {
    resBody: CompanyProfile;
    reqHeaders: {
      Authorization: string;
    };
  };
  patch: {
    resBody: CompanyProfile;
    reqBody: CompanyProfile;
    reqHeaders: {
      Authorization: string;
    };
  };
  delete: {
    resBody: CompanyProfile;
    reqHeaders: {
      Authorization: string;
    };
  };
};
