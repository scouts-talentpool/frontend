import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

type ProtectedRouteProps = {
  outlet: JSX.Element;
};

export function ProtectedRoute({ outlet }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth0();

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
}
