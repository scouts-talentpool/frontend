import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Flex, Stack, Button, HStack, Spinner } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { Navigate } from 'react-router-dom';
import { AdminCompanyListItem } from './AdminCompanyListItem';

type AdminCompanyListProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getCheckboxProps: any;
};

export const AdminCompanyList = ({
  getCheckboxProps,
}: AdminCompanyListProps) => {
  const client = api(aspida());

  const [cursor, setCursor] = useState<number>(1);
  const take = 25;

  const { getAccessTokenSilently } = useAuth0();

  const companies = useQuery(
    ['companies', cursor, take],
    async () => {
      return getAccessTokenSilently().then(
        async (accessToken: string) =>
          await client.firmen.$get({
            headers: { Authorization: `Bearer ${accessToken}` },
            query: {
              take: take,
              cursor: cursor,
            },
          }),
      );
    },
    { keepPreviousData: true },
  );

  if (companies.isPreviousData) return <Spinner />;

  if (companies.isLoading) return <Spinner />;

  if (companies.isError) {
    return <Navigate to={`/error?message=${companies.error}`} />;
  }

  return (
    <Flex direction="column">
      <Stack>
        {companies.data?.map((company) => (
          <AdminCompanyListItem
            company={company}
            key={company.id}
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
            if (!companies.isPreviousData) {
              setCursor((old) => old + take);
            }
          }}
          disabled={companies.isPreviousData}
        >
          Next
        </Button>
      </HStack>
    </Flex>
  );
};
