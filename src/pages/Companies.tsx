import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Skeleton, Stack } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { ProfileCard } from '@/components/common/ProfileCard';
import aspida from '@aspida/axios';
import api from '@/api/$api';

export const Companies = () => {
  const client = api(aspida());

  const { getAccessTokenSilently } = useAuth0();

  const companies = useQuery('companies', async () => {
    return getAccessTokenSilently().then(
      async (accessToken: string) =>
        await client.companies.$get({
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
    );
  });

  if (companies.isLoading) {
    return <Skeleton isLoaded={false}></Skeleton>;
  }

  if (companies.isError) {
    return <span>Error:</span>;
  }

  return (
    <Stack>
      {companies.data?.map((company) => (
        <ProfileCard
          id={company.id}
          imgUrl="https://www.horn-company.de/wp-content/uploads/2018/08/cat-banken-versicherungen-final-300x200.jpg"
          title={company.name}
          location={company.location}
          about={'about lorem ipsum dolor'}
          key={company.id}
        />
      ))}
    </Stack>
  );
};
