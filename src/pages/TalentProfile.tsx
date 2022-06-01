import React from 'react';
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

  const talent = useQuery(['talent', id], async () => {
    return getAccessTokenSilently().then(async (accessToken: string) => {
      if (!id) throw Error('Fehlende Talent ID.');
      return await client.talente._id(+id).$get({
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    });
  });

  if (talent.isLoading) {
    return <Skeleton isLoaded={false} />;
  }

  if (talent.isError) {
    return <Navigate to={`/error?message=${talent.error}`} />;
  }

  return <div>Hallo {talent.data?.benutzer.vorname}</div>;
};
