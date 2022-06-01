import { Talent } from '@/api/@types';
import { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    reqHeaders: {
      Authorization: string;
    };

    resBody: Talent;
  };

  patch: {
    reqHeaders: {
      Authorization: string;
    };

    reqBody: Talent;
    resBody: Talent;
  };

  delete: {
    reqHeaders: {
      Authorization: string;
    };

    resBody: Talent;
  };
}>;
