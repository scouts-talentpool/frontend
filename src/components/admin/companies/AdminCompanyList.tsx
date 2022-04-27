import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { chakra, Checkbox, Flex, Skeleton, Stack, Box } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { Company } from '@/components/common/Company';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { Navigate } from 'react-router-dom';

export const AdminCompanyList = () => {
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
        <Flex alignItems="center" key={company.id}>
          <Checkbox></Checkbox>
          <Box width="100%" ml="4">
            <Company key={company.id} company={company} />
          </Box>
        </Flex>
      ))}
    </Stack>
  );
};
