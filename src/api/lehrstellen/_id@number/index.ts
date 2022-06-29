import { Lehrstelle } from '@/api/@types';
import { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    reqHeaders: {
      Authorization: string;
    };

    resBody: Lehrstelle;
  };

  // patch: {
  //   reqHeaders: {
  //     Authorization: string;
  //   };
  //
  //   reqBody: Lehrstelle;
  //   resBody: Lehrstelle;
  // };
  //
  // delete: {
  //   reqHeaders: {
  //     Authorization: string;
  //   };
  //
  //   resBody: Lehrstelle;
  // };
}>;
