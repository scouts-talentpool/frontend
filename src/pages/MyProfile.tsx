import React, { useEffect } from 'react';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { Role } from '@/api/users';
import { useQuery, useQueryClient } from 'react-query';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useNavigate } from 'react-router-dom';

export const MyProfile = () => {
  const client = api(aspida());

  const { user, getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const userDetails = useQuery('me', async () => {
    return getAccessTokenSilently().then(async (accessToken: string) => {
      console.log(user?.sub);
      return await client.users._id(user?.sub ?? '').$get({
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    });
  });

  useEffect(() => {
    queryClient.invalidateQueries('me');
  }, [user]);

  const dest =
    userDetails.data?.role === Role.COMPANY
      ? `/companies/${userDetails.data?.companyProfileId}`
      : `/talents/${userDetails.data?.talentProfileId}`;

  return <Navigate to={dest} />;
};
