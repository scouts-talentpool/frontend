export const getCompanies = async (
  accessToken: string,
) => {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_API_URL}/companies`,
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        }),
      },
    );
    return await request.json();
  } catch {
    return null;
  }
};


export const getCompanyProfile = async (
  companyProfileId: string,
  accessToken: string,
) => {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_API_URL}/companies/${companyProfileId}`,
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        }),
      },
    );
    return await request.json();
  } catch {
    return null;
  }
};
