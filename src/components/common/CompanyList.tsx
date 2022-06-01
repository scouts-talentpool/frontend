import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Flex, HStack, Spinner, Stack } from '@chakra-ui/react';
import { useQuery, useQueryClient } from 'react-query';
import { CompanyListItem } from '@/components/common/CompanyListItem';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { Navigate } from 'react-router-dom';
import { Firma } from '@/api/@types';

export const CompanyList = () => {
  const client = api(aspida());

  const [cursor, setCursor] = useState<number>(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [take, _] = useState<number>(25);

  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const companies = useQuery(
    ['companies', cursor],
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

  useEffect(() => {
    queryClient.invalidateQueries('companies');
  }, [cursor, take]);

  if (companies.isLoading) return <Spinner />;

  if (companies.isPreviousData) return <Spinner />;

  if (companies.isError) {
    return <Navigate to={`/error?message=${companies.error}`} />;
  }

  return (
    <Flex direction="column">
      <Stack>
        {companies.data?.map((company: Firma) => (
          <CompanyListItem key={company.id} company={company} />
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
