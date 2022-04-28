import React, { useEffect, useState } from 'react';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery, useQueryClient } from 'react-query';
import { Checkbox } from '@chakra-ui/checkbox';
import { Stack, Flex, Box, HStack } from '@chakra-ui/layout';
import { Navigate } from 'react-router';
import { Button, CheckboxGroup, Spinner } from '@chakra-ui/react';
import { Role } from '@/api/users';
import { Employee } from './Employee';

type AdminEmployeeListProps = {
  checkboxProps?: any;
};

export const AdminEmployeeList = ({
  checkboxProps,
}: AdminEmployeeListProps) => {
  const client = api(aspida());

  const [cursor, setCursor] = useState<number>(1);
  const [take, _] = useState<number>(25);

  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const { data, isPreviousData, isSuccess, isLoading, isError, error } =
    useQuery(
      ['users', cursor],
      async () => {
        return getAccessTokenSilently().then(
          async (accessToken: string) =>
            await client.users.$get({
              headers: { Authorization: `Bearer ${accessToken}` },
              query: {
                take,
                cursor,
                role: Role.COMPANY,
              },
            }),
        );
      },
      { keepPreviousData: true },
    );

  useEffect(() => {
    queryClient.invalidateQueries('users');
  }, [cursor, take]);

  if (isLoading) return <Spinner />;

  if (isPreviousData) return <Spinner />;

  if (isError) {
    return <Navigate to={`/error?message=${error}`} />;
  }

  return (
    <Flex direction="column">
      <CheckboxGroup onChange={(e) => console.log(e)}>
        <Stack>
          {data?.map((employee) => (
            <Flex
              alignItems="center"
              justifyContent="stretch"
              key={employee.id}
            >
              <Checkbox value={employee.id} {...checkboxProps()} />
              <Box width="100%" ml="4">
                <Employee employee={employee} />
              </Box>
            </Flex>
          ))}
        </Stack>
      </CheckboxGroup>

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
            if (!isPreviousData) {
              setCursor((old) => old + take);
            }
          }}
          disabled={isPreviousData}
        >
          Next
        </Button>
      </HStack>
    </Flex>
  );
};
