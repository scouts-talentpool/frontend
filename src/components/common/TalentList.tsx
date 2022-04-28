import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Skeleton, Stack } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { Talent } from '@/components/common/Talent';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { Navigate } from 'react-router-dom';

export const TalentList = () => {
  const client = api(aspida());

  const { getAccessTokenSilently } = useAuth0();

  const talents = useQuery('talent', async () => {
    return getAccessTokenSilently().then(
      async (accessToken: string) =>
        await client.talents.$get({
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
    );
  });

  if (talents.isLoading) {
    return <Skeleton isLoaded={false}></Skeleton>;
  }

  if (talents.isError) {
    return <Navigate to={`/error?message=${talents.error}`} />;
  }

  return (
    <Stack>
      {talents.data?.map((talent) => (
        <Talent key={talent.id} talent={talent} />
      ))}
    </Stack>
  );
};
