import React, { ComponentType, useEffect } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { Skeleton } from '@chakra-ui/react';
import { useQuery, useQueryClient } from 'react-query';
import { Role } from '@/api/users';
import aspida from '@aspida/axios';
import api from '@/api/$api';

interface ProtectedRouteProps {
  component: ComponentType;
}

// export const ProtectedRoute = ({ outlet }: any) => {
//   const { isAuthenticated } = useAuth0();

//   if (isAuthenticated) {
//     const Outlet = outlet;
//     return <Outlet />;
//   }
//   console.log('binted-bogos');

//   return <Navigate to="/login" />;
// };

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
}) => {
  const Component = withAuthenticationRequired(component, {
    returnTo: '/login',
    onRedirecting: () => <Skeleton />,
  });

  return <Component />;
};

// export const AdminProtectedRoute = ({ outlet }: any) => {
//   const client = api(aspida());

//   const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
//   const queryClient = useQueryClient();

//   const userDetails = useQuery('me', async () => {
//     return getAccessTokenSilently().then(
//       async (accessToken: string) =>
//         await client.users._id(user?.sub?.split('|')[1]!).$get({
//           headers: { Authorization: `Bearer ${accessToken}` },
//         }),
//     );
//   });

//   useEffect(() => {
//     queryClient.invalidateQueries('me');
//   }, [user]);

//   if (userDetails.isLoading) {
//     return <Skeleton isLoaded={false} />;
//   }

//   if (userDetails.isError) {
//     return <Navigate to={`/error?message=${userDetails.error}`} />;
//   }

//   console.log(isAuthenticated);
//   console.log(userDetails?.data?.role!);

//   if (isAuthenticated && userDetails?.data?.role! === Role.ADMIN) {
//     const Outlet = outlet;
//     console.log('binted-1');
//     return <Outlet />;
//   }
//   console.log('binted-2');
//   return <p>Bruh</p>;
// };
