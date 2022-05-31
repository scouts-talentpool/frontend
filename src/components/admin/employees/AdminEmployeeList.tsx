import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Flex, Stack, Button, HStack, Spinner } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { Navigate } from 'react-router-dom';
import { AdminEmployeeListItem } from './AdminEmployeeListItem';

type AdminEmployeeListProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getCheckboxProps: any;
};

export const AdminEmployeeList = ({
  getCheckboxProps,
}: AdminEmployeeListProps) => {
  const client = api(aspida());

  const [cursor, setCursor] = useState<number>(1);
  const take = 25;

  const { getAccessTokenSilently } = useAuth0();

  const employees = useQuery(
    ['employees', cursor, take],
    async () => {
      return getAccessTokenSilently().then(
        async (accessToken: string) =>
          await client.benutzer.$get({
            config: {
              headers: { Authorization: `Bearer ${accessToken}` },
            },
            query: {
              take: take.toString(),
              cursor: cursor.toString(),
              rolle: 'Mitarbeiter',
            },
          }),
      );
    },
    { keepPreviousData: true },
  );

  if (employees.isPreviousData) return <Spinner />;

  if (employees.isLoading) return <Spinner />;

  if (employees.isError) {
    return <Navigate to={`/error?message=${employees.error}`} />;
  }

  return (
    <Flex direction="column">
      <Stack>
        {employees.data?.map((employee) => (
          <AdminEmployeeListItem
            employee={employee}
            key={employee.id}
            getCheckboxProps={getCheckboxProps}
          />
        ))}
      </Stack>
      <HStack mt="4">
        <Button
          onClick={() => {
            if (cursor > 0) {
              setCursor((old) => old - take);
            }
          }}
          disabled={cursor === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => {
            if (!employees.isPreviousData) {
              setCursor((old) => old + take);
            }
          }}
          disabled={employees.isPreviousData}
        >
          Next
        </Button>
      </HStack>
    </Flex>
  );
};
