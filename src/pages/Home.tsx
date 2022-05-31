import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { UserHome } from './UserHome';
import { LandingHome } from './LandingHome';

export const Home = () => {
  const { isAuthenticated } = useAuth0();

  if(isAuthenticated) {
    return <UserHome />
  } else {
    return <LandingHome />
  }
};
