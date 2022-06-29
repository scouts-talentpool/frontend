import { DefineMethods } from 'aspida';
import { Lehrstelle } from '../@types';

export type Methods = DefineMethods<{
  get: {
    reqHeaders: {
      Authorization: string;
    };

    query: {
      cursor: number;
      take: number;
    };

    resBody: Lehrstelle[];
  };

  post: {
    reqHeaders: {
      Authorization: string;
    };

    reqBody: Partial<Lehrstelle>;
    resBody: Lehrstelle;
  };
}>;
