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

  const benutzer = useQuery(
    ['benutzer', cursor],
    async () => {
      return getAccessTokenSilently().then(
        async (accessToken: string) =>
          await client.benutzer.$get({
            headers: { Authorization: `Bearer ${accessToken}` },
            query: {
              take: take,
              cursor: cursor,
              rolle: 'Talent',
            },
          }),
      );
    },
    { keepPreviousData: true },
  );

  useEffect(() => {
    queryClient.invalidateQueries('benutzer');
  }, [cursor, take]);

  if (benutzer.isLoading) return <Spinner />;

  if (benutzer.isPreviousData) return <Spinner />;

  if (benutzer.isError) {
    return <Navigate to={`/error?message=${benutzer.error}`} />;
  }
  return (
    <Flex direction="column">
      <Stack>
        {benutzer.data?.map((benutzer) => (
          <TalentListItem key={benutzer.id} benutzer={benutzer} />
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
            if (!benutzer.isPreviousData) {
              setCursor((old) => old + take);
            }
          }}
          disabled={benutzer.isPreviousData}
        >
          Next
        </Button>
      </HStack>
    </Flex>
  );
};
