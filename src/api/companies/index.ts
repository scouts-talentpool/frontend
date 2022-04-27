export type Company = {
  id: string;
  name: string;
  location: string;
};

export type Methods = {
  get: {
    resBody: Company[];
    reqHeaders: {
      Authorization: string;
    };
  };
};
