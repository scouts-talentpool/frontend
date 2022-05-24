import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Skeleton } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { useQuery, useQueryClient } from 'react-query';
import { useEffect } from 'react';

export const CompanyProfile = () => {
  const client = api(aspida());

  const { id } = useParams();

  const queryClient = useQueryClient();
  const { getAccessTokenSilently } = useAuth0();

  const company = useQuery('company', async () => {
    return getAccessTokenSilently().then(
      async (accessToken: string) =>
        await client.firmen._id(id!).$get({
          config: {
            headers: { Authorization: `Bearer ${accessToken}` },
          },
        }),
    );
  });

  useEffect(() => {
    queryClient.invalidateQueries('company');
  }, [id]);

  if (company.isLoading) {
    return <Skeleton isLoaded={false} />;
  }

  if (company.isError) {
    return <Navigate to={`/error?message=${company.error}`} />;
  }

  return <div>Hello {company.data?.name}</div>;
};
