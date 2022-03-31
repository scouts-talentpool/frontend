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
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';

import { getUserById } from '../../lib/users';

export const NavMenu = () => {
  const { user, logout, getAccessTokenSilently } = useAuth0();

  const [userProfile, setUserProfile] = useState<any>();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = await getAccessTokenSilently();
      const userProfile = getUserById(user!, token);
      if (userProfile) setUserProfile(userProfile);
    };

    fetchUserProfile().catch(console.error);
  }, []);

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

        {userProfile.role !== 'ADMIN' ? (
          <MenuItem
            as={NavLink}
            to={
              userProfile.role === 'COMPANY'
                ? `/companies/${userProfile.id}`
                : `/talents/${userProfile.id}`
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
