import React from 'react';
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
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { Role } from '@/api/users';
import { Error } from '@/pages/Error';
import { useQuery, useQueryClient } from 'react-query';

export const NavMenu = () => {
  const client = api(aspida());

  const { user, logout, getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const userDetails = useQuery('user', async () => {
    return getAccessTokenSilently().then(
      async (accessToken: string) =>
        await client.users._id(user?.sub?.split('|')[1]!).$get({
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
    );
  });

  if (userDetails.isLoading) {
    return <Skeleton isLoaded={false}></Skeleton>;
  }

  if (userDetails.isError) {
    return <Error message="Ein Fehler ist aufgetreten." />;
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

        {userDetails.data?.role! !== Role.ADMIN ? (
          <MenuItem
            as={NavLink}
            to={
              userDetails.data?.role! === Role.COMPANY
                ? `/companies/${userDetails.data?.companyProfileId}`
                : `/talents/${userDetails.data?.talentProfileId}`
            }
          >
            Mein Profil
          </MenuItem>
        ) : (
          <></>
        )}

        <MenuItem
          onClick={() => {
            logout();
            queryClient.invalidateQueries('profile');
            queryClient.invalidateQueries('user');
          }}
        >
          Abmelden
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
