import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Skeleton, Stack } from '@chakra-ui/react';
import { CompanyCard } from '../components/companies/CompanyCard';
import { getCompanies } from '../lib/companies';
import { useQueryClient, useQuery } from 'react-query';

export const Companies = () => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const companies = useQuery('companies', () => {
    return getAccessTokenSilently().then(
      async (accessToken: string) => await getCompanies(accessToken),
    );
  });

  if (companies.isLoading) {
    return <Skeleton isLoaded={false}></Skeleton>;
  }

  if (companies.isError) {
    return <span>Error:</span>;
  }

  return (
    <Stack>
      {companies.data.map((company: any) => (
        <CompanyCard
          id={company.id}
          imgUrl="https://www.horn-company.de/wp-content/uploads/2018/08/cat-banken-versicherungen-final-300x200.jpg"
          title={company.name}
          location={company.location}
          about={'about lorem ipsum dolor'}
          key={company.id}
        />
      ))}
    </Stack>
  );
};
