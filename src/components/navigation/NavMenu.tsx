import React, { useEffect } from 'react';
import {
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
  Skeleton,
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, NavLink } from 'react-router-dom';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { Role } from '@/api/users';
import { useQuery, useQueryClient } from 'react-query';

export const NavMenu = () => {
  const client = api(aspida());

  const { user, logout, getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const userDetails = useQuery('me', async () => {
    return getAccessTokenSilently().then(
      async (accessToken: string) =>
        await client.users._id(user?.sub ?? '').$get({
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
    );
  });

  useEffect(() => {
    queryClient.invalidateQueries('me');
  }, [user]);

  if (userDetails.isLoading) {
    return <Skeleton isLoaded={false}></Skeleton>;
  }

  if (userDetails.isError) {
    return <Navigate to={`/error?message=${userDetails.error}`} />;
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}
      >
        <Avatar size={'sm'} src={user?.picture} />
      </MenuButton>

      <MenuList alignItems={'center'}>
        <br />
        <Center>
          <Avatar size={'2xl'} src={user?.picture} />
        </Center>
        <br />
        <Center>
          <p>{user?.nickname}</p>
        </Center>
        <br />
        <MenuDivider />

        {userDetails.data?.role !== Role.ADMIN ? (
          <MenuItem as={NavLink} to="/me">
            Mein Profil
          </MenuItem>
        ) : (
          <></>
        )}

        <MenuItem
          onClick={() => {
            logout();
            queryClient.invalidateQueries('me');
          }}
        >
          Abmelden
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
