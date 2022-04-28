import React from 'react';
import {
  LinkBox,
  Flex,
  Text,
  Heading,
  LinkOverlay,
  Stack,
} from '@chakra-ui/react';
import { User } from '@/api/users';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';

type EmployeeProps = {
  employee: User;
};

export const Employee = ({ employee }: EmployeeProps) => {
  const client = api(aspida());

  const { getAccessTokenSilently } = useAuth0();

  const company = useQuery('company', async () => {
    return getAccessTokenSilently().then(
      async (accessToken: string) =>
        await client.companies._id(employee.companyProfileId!).$get({
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
    );
  });

  return (
    <LinkBox bg="gray.200" p="4">
      <Flex alignItems="center" justifyContent="left">
        <Heading size="sm">{employee.id}</Heading>
        <Text size="sm" ml="4">
          {company.data?.name}
        </Text>
      </Flex>
    </LinkBox>
  );
};
