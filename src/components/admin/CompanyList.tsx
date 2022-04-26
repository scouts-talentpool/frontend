import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Stack } from '@chakra-ui/react';
import { getCompanies } from '@/lib/companies';
import { ProfileCard } from '../base/ProfileCard';

export const Companies = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [companies, setCompanies] = useState<Array<any>>();

  useEffect(() => {
    getAccessTokenSilently().then(async (accessToken: string) => {
      setCompanies(await getCompanies(accessToken));
    });
  }, []);

  return (
    <Stack>
      {companies?.map((company) => (
        <ProfileCard
          id={company.id}
          imgUrl="https://www.horn-company.de/wp-content/uploads/2018/08/cat-banken-versicherungen-final-300x200.jpg"
          title={company.name}
          location={company.location}
          about={'about lorem ipsum dolor'}
          linkPrefix="/admin/companies"
          key={company.id}
        />
      ))}
    </Stack>
  );
};
