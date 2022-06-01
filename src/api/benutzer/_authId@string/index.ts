import { Benutzer } from '@/api/@types';
import { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    reqHeaders: {
      Authorization: string;
    };

    resBody: Benutzer;
  };

  patch: {
    reqHeaders: {
      Authorization: string;
    };

    reqBody: Benutzer;
    resBody: Benutzer;
  };

  delete: {
    reqHeaders: {
      Authorization: string;
    };

    resBody: Benutzer;
  };
}>;
