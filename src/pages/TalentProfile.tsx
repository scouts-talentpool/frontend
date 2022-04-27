import { Navigate, useParams } from 'react-router-dom';
import { Skeleton } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import aspida from '@aspida/axios';
import api from '@/api/$api';
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
    return <Navigate to={`/error?message=${profile.error}`} />;
  }

  return (
    <div>
      Hello {profile.data?.firstname} {profile.data?.lastname}
    </div>
  );
};
