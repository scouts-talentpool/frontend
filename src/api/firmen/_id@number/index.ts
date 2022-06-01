import { Firma } from '@/api/@types';
import { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    reqHeaders: {
      Authorization: string;
    };

    resBody: Firma;
  };

  patch: {
    reqHeaders: {
      Authorization: string;
    };

    reqBody: Firma;
    resBody: Firma;
  };

  delete: {
    reqHeaders: {
      Authorization: string;
    };

    resBody: Firma;
  };
}>;
