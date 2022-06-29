// import React from 'react';
// import aspida from '@aspida/axios';
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
// import { useNavigate } from 'react-router-dom';
// import { Campus, Talent } from '@/api/@types';
// import { useAuth0 } from '@auth0/auth0-react';
// import { useMutation } from 'react-query';
// import api from '@/api/$api';
//
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
//
// export const CreateTalentDialog = () => {
//   const { isOpen, onClose, onOpen } = useDisclosure();
//   const client = api(aspida());
//   const navigate = useNavigate();
//   const {
//     handleSubmit,
//     register,
//     formState: { errors, isSubmitting },
//   } = useForm<Talent>();
//
//   const { getAccessTokenSilently } = useAuth0();
//
//
//   const createTalent = useMutation(async (newTalent: Talent) => {
//     return getAccessTokenSilently().then(
//       async (accessToken: string) =>
//         await client.talente._id(newTalent.id).$patch({
//           headers: { Authorization: `Bearer ${accessToken}` },
//           body: newTalent,
//         }),
//     );
//   });
//
//   const onSubmit: SubmitHandler<Talent> = (newTalent) => {
//     createTalent.mutateAsync(newTalent).then((talent) => {
//       navigate(`/talente/${talent.id}`);
//     });
//   };
//
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
//
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
//                 <FormControl isInvalid={!!errors.id}>
//                   <FormLabel htmlFor="campus">Campus</FormLabel>
//                   <Select
//                     id="vorname"
//                     placeholder="Bitte auswählen"
//                     {...register('id', {
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
//                     {errors.id && errors.id.message}
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
