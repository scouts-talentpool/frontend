import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Stack } from '@chakra-ui/react';
import { getTalents } from '@/lib/talents';
import { ProfileCard } from '../base/ProfileCard';

export const Companies = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [talents, setTalents] = useState<Array<any>>();

  useEffect(() => {
    getAccessTokenSilently().then(async (accessToken: string) => {
      setTalents(await getTalents(accessToken));
    });
  }, []);

  return (
    <Stack>
      {talents?.map((talent) => (
        <ProfileCard
          id={talent.id}
          imgUrl="https://www.horn-company.de/wp-content/uploads/2018/08/cat-banken-versicherungen-final-300x200.jpg"
          title={talent.name}
          location={talent.location}
          about={'about lorem ipsum dolor'}
          key={talent.id}
        />
      ))}
    </Stack>
  );
};
