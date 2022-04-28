import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Checkbox, Flex, Skeleton, Stack, Box } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { Navigate } from 'react-router-dom';
import { Talent } from '@/components/common/Talent';

export const AdminTalentList = () => {
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

  if (talents.isLoading) {
    return <Skeleton isLoaded={false}></Skeleton>;
  }

  if (talents.isError) {
    return <Navigate to={`/error?message=${talents.error}`} />;
  }

  return (
    <Stack>
      {talents.data?.map((talent) => (
        <Flex alignItems="center" key={talent.id}>
          <Checkbox></Checkbox>
          <Box width="100%" ml="4">
            <Talent key={talent.id} talent={talent} />
          </Box>
        </Flex>
      ))}
    </Stack>
  );
};
