import { User } from '..';

export type Methods = {
  get: {
    resBody: User;
    reqHeaders: {
      Authorization: string;
    };
  };
  patch: {
    resBody: User;
    reqBody: User;
    reqHeaders: {
      Authorization: string;
    };
  };
  delete: {
    resBody: User;
    reqHeaders: {
      Authorization: string;
    };
  };
};
