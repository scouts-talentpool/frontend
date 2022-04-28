import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  chakra,
  Checkbox,
  Flex,
  Skeleton,
  Stack,
  Box,
  Button,
  HStack,
  Spinner,
  CheckboxGroup,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useQuery, useQueryClient } from 'react-query';
import { Company } from '@/components/common/Company';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { Navigate } from 'react-router-dom';

type AdminCompanyListProps = {
  checkboxProps?: any;
};

export const AdminCompanyList = ({ checkboxProps }: AdminCompanyListProps) => {
  const client = api(aspida());

  const [cursor, setCursor] = useState<number>(1);
  const [take, _] = useState<number>(25);

  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const companies = useQuery(
    ['companies', cursor],
    async () => {
      return getAccessTokenSilently().then(
        async (accessToken: string) =>
          await client.companies.$get({
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
    queryClient.invalidateQueries('companies');
  }, [cursor, take]);

  if (companies.isLoading) return <Spinner />;

  if (companies.isPreviousData) return <Spinner />;

  if (companies.isError) {
    return <Navigate to={`/error?message=${companies.error}`} />;
  }

  return (
    <Flex direction="column">
      <CheckboxGroup onChange={(e) => console.log(e)}>
        <Stack>
          {companies.data?.map((company) => (
            <Flex alignItems="center" justifyContent="stretch" key={company.id}>
              <Checkbox value={company.id} {...checkboxProps()} />
              <Box width="100%" ml="4">
                <Company company={company} />
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
