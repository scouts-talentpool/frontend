import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Skeleton, Stack } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { Company } from '@/components/common/Company';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { Navigate } from 'react-router-dom';

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
    return <Navigate to={`/error?message=${companies.error}`} />;
  }

  return (
    <Stack>
      {companies.data?.map((company) => (
        <Company key={company.id} company={company} />
      ))}
    </Stack>
  );
};
