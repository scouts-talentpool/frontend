import { DefineMethods } from 'aspida';
import { Lehrberuf } from '../@types';

export type Methods = DefineMethods<{
  get: {
    reqHeaders: {
      Authorization: string;
    };

    resBody: Lehrberuf[];
  };

  post: {
    reqHeaders: {
      Authorization: string;
    };

    reqBody: Lehrberuf;
    resBody: Lehrberuf;
  };
}>;
