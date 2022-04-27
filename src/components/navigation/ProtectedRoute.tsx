import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { Skeleton } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { Role } from '@/api/users';
import aspida from '@aspida/axios';
import api from '@/api/$api';

type ProtectedRouteProps = {
  outlet: JSX.Element;
};

export const ProtectedRoute = ({ outlet }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return outlet;
  }

  return <Navigate to="/login" />;
};

export const AdminProtectedRoute = ({ outlet }: ProtectedRouteProps) => {
  const client = api(aspida());

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const userDetails = useQuery('me', async () => {
    return getAccessTokenSilently().then(
      async (accessToken: string) =>
        await client.users._id(user?.sub?.split('|')[1]!).$get({
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
    );
  });

  if (userDetails.isLoading) {
    return <Skeleton isLoaded={false} />;
  }

  if (userDetails.isError) {
    return <Navigate to={`/error?message=${userDetails.error}`} />;
  }

  if (isAuthenticated && userDetails?.data?.role! === Role.ADMIN) {
    return outlet;
  }

  return <Navigate to={`/error?message=${userDetails.error}`} />;
};
