// import React, { SyntheticEvent, useState } from 'react';
// import {
//   Button,
//   chakra,
//   FormControl,
//   FormLabel,
//   Input,
//   Stack,
//   StackItem,
// } from '@chakra-ui/react';

// export const UserDetails = ({ profile }: UserDetailsProps) => {
//   const [editing, setEditing] = useState(false);

//   const [firstnameInput, setFirstname] = useState<string>();
//   const [lastnameInput, setLastname] = useState<string>();
//   const [emailInput, setEmail] = useState<string>();

//   const submitChanges = (e: SyntheticEvent) => {
//     e.preventDefault();
//   };

//   return (
//     <chakra.form onSubmit={submitChanges}>
//       <Stack spacing={6}>
//         <Stack>
//           <FormControl as={StackItem}>
//             <FormLabel htmlFor="firstname">Vornamen</FormLabel>
//             <Input
//               type="text"
//               name="firstname"
//               value={firstname}
//               onChange={(e) => setFirstname(e.target.value)}
//               isReadOnly={!editing}
//             />
//           </FormControl>

//           <FormControl as={StackItem}>
//             <FormLabel htmlFor="lastname">Nachname</FormLabel>
//             <Input
//               type="text"
//               name="lastname"
//               value={lastname}
//               onChange={(e) => setLastname(e.target.value)}
//               isReadOnly={!editing}
//             />
//           </FormControl>

//           <FormControl as={StackItem}>
//             <FormLabel htmlFor="email">Email Addresse</FormLabel>
//             <Input
//               type="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               isReadOnly={!editing}
//             />
//           </FormControl>
//         </Stack>
//         {editing ? (
//           <Button type="submit">Speichern</Button>
//         ) : (
//           <Button
//             type="button"
//             onClick={(e) => {
//               e.preventDefault();
//               setEditing(true);
//             }}
//           >
//             Bearbeiten
//           </Button>
//         )}
//       </Stack>
//     </chakra.form>
//   );
// };

import React from 'react';

export const UserDetails = () => {
  return <div>UserDetails</div>;
};
