import React from 'react';
import { Flex, Link, Stack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const NavBar = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <Flex justifyContent="center" alignItems="center">
      <Stack direction="row" spacing={5}>
        <Link to="/" as={NavLink}>
          Home
        </Link>
        <Link to="/companies" as={NavLink}>
          Firmen
        </Link>
        <Link to="/talents" as={NavLink}>
          Talente
        </Link>
        {!isAuthenticated ? (
          <Link to="" onClick={loginWithRedirect} as={NavLink}>
            Login
          </Link>
        ) : (
          <></>
        )}
      </Stack>
    </Flex>
  );
};
