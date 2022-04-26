import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Skeleton, Stack } from '@chakra-ui/react';
import { Error } from '@/pages/Error';
import { getTalents } from '../lib/talents';
import { useQuery, useQueryClient } from 'react-query';
import { useAspidaQuery } from '@aspida/react-query';
import { ProfileCard } from '@/components/base/ProfileCard';
import { TalentProfile } from '@/api/talents';
import aspida from '@aspida/axios';
import api from '@/api/$api';

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

  if (talents.isError) return <Error message="Ein Fehler ist aufgetreten." />;

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
