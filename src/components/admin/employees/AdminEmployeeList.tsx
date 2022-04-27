import React from 'react';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import { Role } from '@/api/users';
import { Employee } from './Employee';
import { Checkbox } from '@chakra-ui/checkbox';
import { Stack, Flex, Box } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { Navigate } from 'react-router';

export const AdminEmployeeList = () => {
  const client = api(aspida());

  const { getAccessTokenSilently } = useAuth0();

  const users = useQuery('users', async () => {
    return getAccessTokenSilently().then(
      async (accessToken: string) =>
        await client.users.$get({
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
    );
  });

  if (users.isLoading) {
    return <Skeleton isLoaded={false}></Skeleton>;
  }

  if (users.isError) {
    return <Navigate to={`/error?message=${users.error}`} />;
  }

  return (
    <Stack>
      {users.data
        ?.filter((user) => user.role === 'COMPANY')
        .map((employee) => (
          <Flex alignItems="center" key={employee.id}>
            <Checkbox></Checkbox>
            <Box width="100%" ml="4">
              <Employee employee={employee} />;
            </Box>
          </Flex>
        ))}
    </Stack>
  );
};
