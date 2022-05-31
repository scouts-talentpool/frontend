import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Flex, HStack, Spinner, Stack } from '@chakra-ui/react';
import { useQuery, useQueryClient } from 'react-query';
import { TalentListItem } from '@/components/common/TalentListItem';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { Navigate } from 'react-router-dom';

export const TalentList = () => {
  const client = api(aspida());

  const [cursor, setCursor] = useState<number>(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [take, _] = useState<number>(25);

  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const talents = useQuery(
    ['talents', cursor],
    async () => {
      return getAccessTokenSilently().then(
        async (accessToken: string) =>
          await client.talente.$get({
            config: {
              headers: { Authorization: `Bearer ${accessToken}` },
            },
            query: {
              take: take.toString(),
              cursor: cursor.toString(),
            },
          }),
      );
    },
    { keepPreviousData: true },
  );

  useEffect(() => {
    queryClient.invalidateQueries('talents');
  }, [cursor, take]);

  if (talents.isLoading) return <Spinner />;

  if (talents.isPreviousData) return <Spinner />;

  if (talents.isError) {
    return <Navigate to={`/error?message=${talents.error}`} />;
  }
  return (
    <Flex direction="column">
      <Stack>
        {talents.data?.map((talent) => (
          <TalentListItem key={talent.id} talent={talent} />
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
