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

export const getTalents = async (accessToken: string) => {
  try {
    const request = await fetch(`${import.meta.env.VITE_API_URL}/talents`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      }),
    });
    return await request.json();
  } catch {
    return null;
  }
};
