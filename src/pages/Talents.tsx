import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Skeleton, Stack } from '@chakra-ui/react';
import { getTalents } from '../lib/talents';
import { useQueryClient, useQuery } from 'react-query';
import { ProfileCard } from '@/components/base/ProfileCard';

export const Talents = () => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const talents = useQuery('talents', () => {
    return getAccessTokenSilently().then(
      async (accessToken: string) => await getTalents(accessToken),
    );
  });

  if (talents.isLoading) {
    return <Skeleton isLoaded={false}></Skeleton>;
  }

  if (talents.isError) {
    return <span>Error:</span>;
  }

  return (
    <Stack>
      {talents.data.map((talent: any) => (
        <ProfileCard
          id={talent.id}
          imgUrl="https://www.horn-talent.de/wp-content/uploads/2018/08/cat-banken-versicherungen-final-300x200.jpg"
          title={talent.name}
          location={talent.location}
          about={'about lorem ipsum dolor'}
          key={talent.id}
        />
      ))}
    </Stack>
  );
};
