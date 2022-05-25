import React, { useEffect } from 'react';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { useQuery, useQueryClient } from 'react-query';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

export const MyProfile = () => {
  const client = api(aspida());

  const { user, getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const userDetails = useQuery('me', async () => {
    return getAccessTokenSilently().then(async (accessToken: string) => {
      console.log(user?.sub);
      return await client.benutzer._id(user?.sub ?? '').$get({
        config: {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      });
    });
  });

  useEffect(() => {
    queryClient.invalidateQueries('me');
  }, [user]);

  const dest = userDetails.data?.firmaId
    ? `/companies/${userDetails.data?.firmaId}`
    : `/talents/${userDetails.data?.talentId}`;

  return <Navigate to={dest} />;
};
