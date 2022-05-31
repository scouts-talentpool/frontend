import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Skeleton } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { useQuery } from 'react-query';

export const CompanyProfile = () => {
  const client = api(aspida());

  const { id } = useParams();

  const { getAccessTokenSilently } = useAuth0();

  const company = useQuery(['company', id], async () => {
    return getAccessTokenSilently().then(async (accessToken: string) => {
      if (!id) throw Error('Fehlende Firmen ID.');
      return await client.firmen._id(id).$get({
        config: {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      });
    });
  });

  if (company.isLoading) {
    return <Skeleton isLoaded={false} />;
  }

  if (company.isError) {
    return <Navigate to={`/error?message=${company.error}`} />;
  }

  return <div>Hello {company.data?.firmenname}</div>;
};
