import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Skeleton, Stack } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { ProfileCard } from '@/components/base/ProfileCard';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { Navigate } from 'react-router-dom';

export const Talents = () => {
  const client = api(aspida());

  const { getAccessTokenSilently } = useAuth0();

  const talents = useQuery('talents', async () => {
    return getAccessTokenSilently().then(
      async (accessToken: string) =>
        await client.talents.$get({
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
    );
  });

  if (talents.isLoading) return <Skeleton isLoaded={false} />;

  if (talents.isError) {
    return <Navigate to={`/error?message=${talents.error}`} />;
  }
  return (
    <Stack>
      {talents.data?.map((talent) => (
        <ProfileCard
          id={talent.id}
          imgUrl="https://cdn.discordapp.com/attachments/744965735717011468/968422105689522236/unknown.png"
          title={talent.firstname}
          location={talent.lastname}
          about={'about lorem ipsum dolor'}
          key={talent.id}
        />
      ))}
    </Stack>
  );
};
