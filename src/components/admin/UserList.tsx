// import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import { Skeleton, Stack } from '@chakra-ui/react';
// import { useQueryClient, useQuery } from 'react-query';
// import { ProfileCard } from '@/components/base/ProfileCard';
// import { getUsers } from '@/lib/users';

// export const UserList = () => {
//   const { getAccessTokenSilently } = useAuth0();
//   const queryClient = useQueryClient();

//   const users = useQuery('users', () => {
//     return getAccessTokenSilently().then(
//       async (accessToken: string) => await getUsers(accessToken),
//     );
//   });

//   if (users.isLoading) {
//     return <Skeleton isLoaded={false}></Skeleton>;
//   }

//   if (users.isError) {
//     return <span>Error:</span>;
//   }

//   return (
//     <Stack>
//       {users.data.map((user: any) => (
//         <ProfileCard
//           id={user.id}
//           imgUrl='https://cdn.discordapp.com/attachments/744965735717011468/968422105689522236/unknown.png'
//           title={user.name}
//           location={user.location}
//           about={'about lorem ipsum dolor'}
//           key={user.id}
//         />
//       ))}
//     </Stack>
//   );
// };

import React from 'react';

export const UserList = () => {
  return <div>UserList</div>;
};
