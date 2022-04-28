import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Checkbox,
  Flex,
  Skeleton,
  Stack,
  Box,
  Button,
  HStack,
  Spinner,
  CheckboxGroup,
} from '@chakra-ui/react';
import { useQuery, useQueryClient } from 'react-query';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { Navigate } from 'react-router-dom';
import { Talent } from '@/components/common/Talent';
import { Role } from '@/api/users';

type AdminTalentListProps = {
  checkboxProps?: any;
};

export const AdminTalentList = ({ checkboxProps }: AdminTalentListProps) => {
  const client = api(aspida());

  const [cursor, setCursor] = useState<number>(1);
  const [take, _] = useState<number>(25);

  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const talents = useQuery(
    ['talents', cursor],
    async () => {
      return getAccessTokenSilently().then(
        async (accessToken: string) =>
          await client.talents.$get({
            headers: { Authorization: `Bearer ${accessToken}` },
            query: {
              take,
              cursor,
            },
          }),
      );
    },
    { keepPreviousData: true },
  );

  useEffect(() => {
    queryClient.invalidateQueries('talents');
  }, [cursor, take]);

  if (talents.isPreviousData) return <Spinner />;

  if (talents.isLoading) return <Spinner />;

  if (talents.isError) {
    return <Navigate to={`/error?message=${talents.error}`} />;
  }

  return (
    <Flex direction="column">
      <CheckboxGroup onChange={(e) => console.log(e)}>
        <Stack>
          {talents.data?.map((talent) => (
            <Flex alignItems="center" justifyContent="stretch" key={talent.id}>
              <Checkbox value={talent.id} {...checkboxProps()} />
              <Box width="100%" ml="4">
                <Talent talent={talent} />
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
