import { User } from '../..';

export type Methods = {
  patch: {
    resBody: User;
    reqBody: User;
    reqHeaders: {
      Authorization: string;
    };
  };
  get: {
    resBody: User;
    reqHeaders: {
      Authorization: string;
    };
  };
};
