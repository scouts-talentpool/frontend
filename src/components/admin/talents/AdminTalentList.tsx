import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Flex, Stack, Button, HStack, Spinner } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { Navigate } from 'react-router-dom';
import { AdminTalentListItem } from './AdminTalentListItem';

type AdminTalentListProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getCheckboxProps: any;
};

export const AdminTalentList = ({ getCheckboxProps }: AdminTalentListProps) => {
  const client = api(aspida());

  const [cursor, setCursor] = useState<number>(1);
  const take = 25;

  const { getAccessTokenSilently } = useAuth0();

  const talents = useQuery(
    ['talents', cursor, take],
    async () => {
      return getAccessTokenSilently().then(
        async (accessToken: string) =>
          await client.talente.$get({
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

  if (talents.isPreviousData) return <Spinner />;

  if (talents.isLoading) return <Spinner />;

  if (talents.isError) {
    return <Navigate to={`/error?message=${talents.error}`} />;
  }

  return (
    <Flex direction="column">
      <Stack>
        {talents.data?.map((talent) => (
          <AdminTalentListItem
            talent={talent}
            key={talent.id}
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
            if (!talents.isPreviousData) {
              setCursor((old) => old + take);
            }
          }}
          disabled={talents.isPreviousData}
        >
          Next
        </Button>
      </HStack>
    </Flex>
  );
};
