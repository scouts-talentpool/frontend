import { useParams } from 'react-router-dom';
import { Skeleton } from '@chakra-ui/react';
import { UserDetails } from '@/components/admin/UserDetails';
import { Error } from '@/pages/Error';
import { useAuth0 } from '@auth0/auth0-react';
import { useAspidaQuery } from '@aspida/react-query';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export const TalentProfile = () => {
  const client = api(aspida());

  const { id } = useParams();

  const { getAccessTokenSilently } = useAuth0();

  const user = useQuery('user', async () => {
    return getAccessTokenSilently().then(async (accessToken: string) => {
      return await client.users
        ._id(id!)
        .$get({ headers: { Authorization: `Bearer ${accessToken}` } });
    });
  });

  const profile = useQuery('profile', async () => {
    return getAccessTokenSilently().then(
      async (accessToken: string) =>
        await client.talents._id(user.data?.talentProfileId?.toString()!).$get({
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
    );
  });

  if (profile.isLoading) {
    return <Skeleton isLoaded={false} />;
  }

  if (profile.isError) {
    return <Error message="Es ist ein Fehler aufgetreten." />;
  }

  return (
    <div>
      Hello {profile.data?.firstname} {profile.data?.lastname}
    </div>
  );
};
