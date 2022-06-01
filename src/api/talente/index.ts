import { DefineMethods } from 'aspida';
import { Talent } from '../@types';

export type Methods = DefineMethods<{
  get: {
    reqHeaders: {
      Authorization: string;
    };

    query: {
      cursor: number;
      take: number;
    };

    resBody: Talent[];
  };

  post: {
    reqHeaders: {
      Authorization: string;
    };

    reqBody: Talent;
    resBody: Talent;
  };
}>;
