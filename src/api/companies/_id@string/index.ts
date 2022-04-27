import { Company } from '..';

export type Methods = {
  get: {
    resBody: Company;
    reqHeaders: {
      Authorization: string;
    };
  };
  patch: {
    resBody: Company;
    reqBody: Company;
    reqHeaders: {
      Authorization: string;
    };
  };
  delete: {
    resBody: Company;
    reqHeaders: {
      Authorization: string;
    };
  };
};
