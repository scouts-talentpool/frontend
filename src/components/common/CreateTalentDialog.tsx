// import React from 'react';
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalOverlay,
//   useDisclosure,
//   Text,
//   Button,
//   Container,
//   ModalBody,
//   ModalFooter,
//   HStack,
//   chakra,
//   FormControl,
//   Input,
//   FormLabel,
//   Select,
//   useQuery,
//   FormErrorMessage,
// } from '@chakra-ui/react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { Campus, Talent } from '@/api/@types';
// import { useAuth0 } from '@auth0/auth0-react';

// type TalentCreateInput = {
//   id: number;
//   plz: number;
//   wohnort: string;
//   abschlussjahr: number;
//   meineStaerken: string;
//   lieblingsCampusAktivitaet: string;
//   campusId: number;
//   benutzerId: number;
// };

// export const CreateTalentDialog = () => {
//   const { isOpen, onClose, onOpen } = useDisclosure();
//   const {
//     handleSubmit,
//     register,
//     formState: { errors, isSubmitting },
//   } = useForm<TalentCreateInput>();

//   const { getAccessTokenSilently } = useAuth0();

//   const onSubmit: SubmitHandler<TalentCreateInput> = (newTalent) => {
//     console.log(newTalent);
//   };

//   // const campus = useQuery('campus', async () => {
//   //   return getAccessTokenSilently().then(async (accessToken: string) => {
//   //     return await client.campus.$get({
//   //       headers: { Authorization: `Bearer ${accessToken}` },
//   //     });
//   //   });
//   // });

//   const campus: Campus[] = [
//     {
//       id: 1,
//       bezeichnung: 'CSS ICT Campus Zentralschweiz',
//       ort: 'Luzern',
//       plz: 6002,
//       strasse: 'Tribschenstrasse 21',
//       links: [],
//     },
//     {
//       id: 2,
//       bezeichnung: 'ICT Campus Thun',
//       ort: 'Thun',
//       plz: 1000,
//       strasse: 'Thunerstrasse 0',
//       links: [],
//     },
//   ];

//   return (
//     <>
//       <Button onClick={onOpen} type="button">
//         Talent erstellen
//       </Button>
//       <Modal size="full" isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <chakra.form onSubmit={handleSubmit(onSubmit)}>
//             <ModalHeader>
//               <Text size="sm">Talent erstellen</Text>
//             </ModalHeader>
//             <ModalBody>
//               <Container p="2">
//                 <FormControl isInvalid={errors.campusId}>
//                   <FormLabel htmlFor="campus">Campus</FormLabel>
//                   <Select
//                     id="vorname"
//                     placeholder="Bitte auswählen"
//                     {...register('campusId', {
//                       required: 'Erforderliches Feld.',
//                     })}
//                   >
//                     {campus.map((campus) => (
//                       <option key={campus.id} value={campus.id}>
//                         {campus.bezeichnung}
//                       </option>
//                     ))}
//                   </Select>
//                   <FormErrorMessage>
//                     {errors.campusId && errors.campusId.message}
//                   </FormErrorMessage>
//                 </FormControl>
//               </Container>
//             </ModalBody>
//             <ModalFooter>
//               <HStack spacing="2">
//                 <Button onClick={onClose}>Abbrechen</Button>
//                 <Button type="submit" isLoading={isSubmitting}>
//                   Speichern
//                 </Button>
//               </HStack>
//             </ModalFooter>
//           </chakra.form>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

import React from 'react';

export const CreateTalentDialog = () => {
  return <div>CreateTalentDialog</div>;
};
