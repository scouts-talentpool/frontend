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

export const createUser = async (user: any, accessToken: string) => {
  try {
    const request = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      }),
      body: JSON.stringify(user),
    });
    const lmao = await request.json();
    console.log(lmao);
  } catch {
    return null;
  }
};

export const findLoginMethodByEmail = async (email: string) => {
  const result = await fetch(
    `${import.meta.env.VITE_API_URL}/users/role/${email}`,
    {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    },
  );
  return await result.json();
};
