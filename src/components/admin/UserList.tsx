import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Stack } from '@chakra-ui/react';
import { getUsers } from '@/lib/users';
import { CompanyCard } from '../companies/CompanyCard';
import { TalentCard } from '../talents/TalentCard';

export const Companies = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [users, setUsers] = useState<Array<any>>();

  useEffect(() => {
    getAccessTokenSilently().then(async (accessToken: string) => {
      setUsers(await getUsers(accessToken));
    });
  }, []);

  return (
    <Stack>
      {users?.map((user) => (
        <TalentCard
          id={user.id}
          imgUrl="https://www.horn-company.de/wp-content/uploads/2018/08/cat-banken-versicherungen-final-300x200.jpg"
          name={user.name}
          location={user.location}
          about={'about lorem ipsum dolor'}
          key={user.id}
        />
      ))}
    </Stack>
  );
};
