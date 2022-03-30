import React from 'react';
import { Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const NavBar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav>
      <ul>
        <Link to="/" as={NavLink}>
          Home
        </Link>
        <Link to="/companies" as={NavLink}>
          Firmen
        </Link>
        {!isAuthenticated ? (
          <Link to={'/login'} as={NavLink}>
            Login
          </Link>
        ) : (
          <></>
        )}{' '}
      </ul>
    </nav>
  );
};
