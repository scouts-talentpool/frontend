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

export const createUser = async (user: User, accessToken: string) => {
  const userId = extractUserId(user);

  try {
    const request = await fetch(`${import.meta.env.VITE_API_URL}/users/new`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      }),
      body: JSON.stringify({
        userId,
      }),
    });
    return await request.json();
  } catch {
    return null;
  }
};
