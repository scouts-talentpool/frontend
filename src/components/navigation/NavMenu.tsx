import React, { useEffect, useState } from 'react';
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
import { NavLink } from 'react-router-dom';

import { getUserById } from '../../lib/users';
import { useQuery } from 'react-query';

export const NavMenu = () => {
  const { user, logout, getAccessTokenSilently } = useAuth0();

  const userProfile = useQuery('userProfile', () => {
    if (!user) return;
    return getAccessTokenSilently().then(
      async (accessToken: string) => await getUserById(user, accessToken),
    );
  });

  if (userProfile.isLoading) {
    return <Skeleton isLoaded={false}></Skeleton>;
  }

  if (userProfile.isError) {
    return <span>Error</span>;
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

        {userProfile.data?.role !== 'ADMIN' ? (
          <MenuItem
            as={NavLink}
            to={
              userProfile.data?.role === 'COMPANY'
                ? `/companies/${userProfile.data?.id}`
                : `/talents/${userProfile.data?.id}`
            }
          >
            Profile
          </MenuItem>
        ) : (
          <></>
        )}

        <MenuItem as={NavLink} to="/settings">
          Einstellungen
        </MenuItem>

        <MenuItem onClick={() => logout()}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
