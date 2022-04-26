import { useParams } from 'react-router-dom';
import { Skeleton } from '@chakra-ui/react';
import { UserDetails } from '@/components/admin/UserDetails';
import { Error } from '@/pages/Error';
import { useAuth0 } from '@auth0/auth0-react';
import { useAspidaQuery } from '@aspida/react-query';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { useEffect, useState } from 'react';

export const TalentProfile = () => {
  const client = api(aspida());

  const { id } = useParams();

  const { getAccessTokenSilently } = useAuth0();

  const [accessToken, setAccessToken] = useState<string>();
  (async () => {
    setAccessToken(await getAccessTokenSilently());
  })();

  const userDetails = useAspidaQuery(client.talents._id(id!), {
    headers: {
      Authorization: accessToken ?? 'dinimuetter',
    },
  });

  if (!accessToken) return <Skeleton isLoaded={false} />;

  if (userDetails.isLoading) {
    return <Skeleton isLoaded={false} />;
  }

  if (userDetails.isError) {
    return <Error message="Es ist ein Fehler aufgetreten." />;
  }

  // return <UserDetails userId={id!} />;
  return <div>Hello World</div>;
};
