import React from 'react';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { useQuery } from 'react-query';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

export const MyProfile = () => {
  const client = api(aspida());

  const { user, getAccessTokenSilently } = useAuth0();

  const userDetails = useQuery(['me', user], async () => {
    return getAccessTokenSilently().then(async (accessToken: string) => {
      if (!user || !user.sub) throw Error('Ihr Benutzer hat keine gültige ID.');
      return await client.benutzer._id(user.sub.split('|')[1]).$get({
        config: {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      });
    });
  });

  const dest = userDetails.data?.firmaId
    ? `/firmen/${userDetails.data?.firmaId}`
    : `/talente/${userDetails.data?.talentId}`;

  return <Navigate to={dest} />;
};
