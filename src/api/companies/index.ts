export type CompanyProfile = {
  id: string;
  name: string;
  location: string;
};

export type Methods = {
  get: {
    resBody: CompanyProfile[];
    reqHeaders: {
      Authorization: string;
    };
  };
};
