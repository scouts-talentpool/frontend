import React from 'react';
import { LinkBox, Flex, Text, Heading } from '@chakra-ui/react';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import { Benutzer } from '@/api/@types';

type EmployeeProps = {
  employee: Benutzer;
};

export const Employee = ({ employee }: EmployeeProps) => {
  const client = api(aspida());

  const { getAccessTokenSilently } = useAuth0();

  const company = useQuery('company', async () => {
    return getAccessTokenSilently().then(
      async (accessToken: string) =>
        await client.firmen._id(employee.firmaId!.toString()).$get({
          config: {
            headers: { Authorization: `Bearer ${accessToken}` },
          },
        }),
    );
  });

  return (
    <LinkBox bg="gray.200" p="4">
      <Flex alignItems="center" justifyContent="left">
        <Heading size="sm">{employee.id}</Heading>
        <Text size="sm" ml="4">
          {company.data?.firmenname}
        </Text>
      </Flex>
    </LinkBox>
  );
};
