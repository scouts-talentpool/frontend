import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Skeleton, Stack } from '@chakra-ui/react';
import { Error } from '@/pages/Error';
import { getTalents } from '../lib/talents';
import { useQueryClient } from 'react-query';
import { useAspidaQuery } from '@aspida/react-query';
import { ProfileCard } from '@/components/base/ProfileCard';
import { TalentProfile } from '@/api/talents';
import axios from 'axios';
import aspida from '@aspida/axios';
import api from '@/api/$api';

export const Talents = () => {
  const { isLoading, getAccessTokenSilently } = useAuth0();

  const [accessToken, setAccessToken] = useState('');
  (async () => {
    setAccessToken(await getAccessTokenSilently());
  })();

  const client = api(
    aspida(axios, {
      headers: {
        Authorization: accessToken,
      },
    }),
  );

  const [talents, setTalents] = useState<TalentProfile[]>([]);
  useEffect(() => {
    const talents = useAspidaQuery(client.talents, {});
    setTalents(talents.data!);
  }, []);

  return (
    <Stack>
      {talents.map((talent) => (
        <ProfileCard
          id={talent.id}
          imgUrl="https://cdn.discordapp.com/attachments/744965735717011468/968422105689522236/unknown.png"
          title={talent.firstname}
          location={talent.lastname}
          about={'about lorem ipsum dolor'}
          key={talent.id}
        />
      ))}
    </Stack>
  );
};
