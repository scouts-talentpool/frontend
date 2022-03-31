import { User } from '@auth0/auth0-react';

export const extractUserId = (user: User) => {
  const userId = user?.sub?.split('|')[1];
  return userId;
};

export const getUserById = async (user: User, accessToken: string) => {
  const userId = extractUserId(user);

  try {
    const request = await fetch(
      `${import.meta.env.VITE_API_URL}/users/${userId}`,
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

export const getTalentProfile = async (
  talentProfileId: string,
  accessToken: string,
) => {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_API_URL}/talents/${talentProfileId}`,
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
