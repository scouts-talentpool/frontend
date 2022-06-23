import { DefineMethods } from 'aspida';
import { Firma } from '../@types';

export type Methods = DefineMethods<{
  get: {
    reqHeaders: {
      Authorization: string;
    };

    query: {
      cursor: number;
      take: number;
    };

    resBody: Firma[];
  };

  post: {
    reqHeaders: {
      Authorization: string;
    };

    reqBody: Partial<Firma>;
    resBody: Firma;
  };
}>;
