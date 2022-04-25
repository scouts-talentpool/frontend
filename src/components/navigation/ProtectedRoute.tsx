import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { findLoginMethodByEmail } from '../../lib/users';
import { useQuery } from 'react-query';
import { Error } from '../../pages/Error';

type ProtectedRouteProps = {
  outlet: JSX.Element;
};

export const ProtectedRoute = ({ outlet }: ProtectedRouteProps) => {
  const { isLoading, getAccessTokenSilently, user, isAuthenticated } =
    useAuth0();

  const toast = useToast();
  const toast_id = 'unauthorized-warning';

  if (isAuthenticated || isLoading) {
    return outlet;
  } else {
    useEffect(() => {
      if (!toast.isActive(toast_id)) {
        toast({
          title: 'Sie müssen sich zuerst anmelden.',
          position: 'top',
          isClosable: true,
          status: 'warning',
          id: toast_id,
        });
      }
    }, []);

    return <Navigate to="/login" />;
  }
};

export const AdminProtectedRoute = ({ outlet }: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useAuth0();

  const toast = useToast();
  const toast_id = 'unauthorized-warning';

  const role = useQuery('role', () => {
    return findLoginMethodByEmail(user?.email!);
  });

  if (role.isError) {
    return (
      <Error message="Sie haben keine Rechte um auf diesen teil der Seite zu kommen." />
    );
  }

  if (isAuthenticated && role.data.role == 'ADMIN') {
    return outlet;
  } else {
    useEffect(() => {
      if (!toast.isActive(toast_id)) {
        toast({
          title:
            'Sie haben keine Rechte um auf diesen teil der Seite zu kommen.',
          position: 'top',
          isClosable: true,
          status: 'warning',
          id: toast_id,
        });
      }
    }, []);

    return <Navigate to="/" />;
  }
};
