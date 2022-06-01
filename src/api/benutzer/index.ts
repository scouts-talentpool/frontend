import { Benutzer } from '@/api/@types';
import { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    reqHeaders: {
      Authorization: string;
    };

    query: {
      cursor: number;
      take: number;
      rolle?: string;
    };

    resBody: Benutzer[];
  };

  post: {
    reqHeaders: {
      Authorization: string;
    };

    reqBody: Benutzer;
    resBody: Benutzer;
  };
}>;
