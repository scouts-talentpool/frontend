import { Navigate, useParams } from 'react-router-dom';
import { Skeleton } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { useQuery, useQueryClient } from 'react-query';
import { useEffect } from 'react';

export const TalentProfile = () => {
  const client = api(aspida());

  const { id } = useParams();

  const queryClient = useQueryClient();
  const { getAccessTokenSilently } = useAuth0();

  const talent = useQuery('talent', async () => {
    return getAccessTokenSilently().then(
      async (accessToken: string) =>
        await client.talents._id(id!).$get({
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
    );
  });

  useEffect(() => {
    queryClient.invalidateQueries('talent');
  }, [id]);

  if (talent.isLoading) {
    return <Skeleton isLoaded={false} />;
  }

  if (talent.isError) {
    return <Navigate to={`/error?message=${talent.error}`} />;
  }

  return (
    <div>
      Hello {talent.data?.firstname} {talent.data?.lastname}
    </div>
  );
};
