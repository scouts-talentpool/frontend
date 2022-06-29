import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Button,
  Container,
  ModalBody,
  ModalFooter,
  HStack,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { Lehrberuf, Lehrstelle } from '@/api/@types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation, useQuery } from 'react-query';
import aspida from '@aspida/axios';
import api from '@/api/$api';

type LehrstelleCreateInput = {
  startjahr: number;
  stellenanzahl: number;
  lehrberufId: number;
  ausbildungskonzept: string;
  bewerbungsvorgehen: string;
  // ausbildungsorte: string[];
};

export const CreateLehrstelleDialog = () => {
  const client = api(aspida());

  const { getAccessTokenSilently } = useAuth0();

  const { isOpen, onClose, onOpen } = useDisclosure();
  
  const lehrberufe = useQuery('lehrberufe', async () => {
    return getAccessTokenSilently().then(async (accessToken: string) => await client.lehrberufe.$get({
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }));
  });

  const createLehrstelle = useMutation(async (lehrstelle: Partial<Lehrstelle>) => { 
      return getAccessTokenSilently().then(async (accessToken) => 
        await client.lehrstellen.$post({
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          body: lehrstelle
      }));
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LehrstelleCreateInput>();

  const onSubmit: SubmitHandler<LehrstelleCreateInput> = (lehrstelle) => {
      createLehrstelle.mutateAsync({
        ...lehrstelle,
        firmaId: 2,
        ausbildungskonzept: 'lmao',
        bewerbungsvorgehen: 'rofl'
      });
  };

  return (
    <>
      <Button onClick={onOpen} type="button">
        Lehrstelle ausschreiben 
      </Button>
      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <chakra.form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>
              <Text size="sm">Lehrstelle ausschreiben</Text>
            </ModalHeader>
            <ModalBody>
              <Container p="4">
                  <FormControl isInvalid={!!errors.startjahr}>
                    <FormLabel htmlFor="startjahr">Startjahr</FormLabel>
                    <Input
                      id="startjahr"
                      placeholder="2024"
                      type="number"
                      {...register('startjahr')}
                    />
                    <FormErrorMessage>
                      {errors.startjahr && errors.startjahr.message}
                    </FormErrorMessage>
                  </FormControl>
                  
                  <FormControl isInvalid={!!errors.stellenanzahl}>
                    <FormLabel htmlFor="stellenanzahl">Stellenanzahl</FormLabel>
                    <Input
                      id="stellenanzahl"
                      placeholder="3"
                      type="number"
                      {...register('stellenanzahl')}
                    />
                    <FormErrorMessage>
                      {errors.stellenanzahl && errors.stellenanzahl.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.lehrberufId}>
                    <FormLabel htmlFor="lehrberufId">Firma</FormLabel>
                    <Select
                      id="lehrberufId"
                      placeholder="Firma auswählen"
                      {...register('lehrberufId')}
                    >
                      {lehrberufe.data?.map((beruf: Lehrberuf) => (
                        <option key={beruf.id} value={beruf.id}>
                          {beruf.bezeichnung}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.lehrberufId && errors.lehrberufId.message}
                    </FormErrorMessage>
                  </FormControl>
              </Container>
            </ModalBody>
            <ModalFooter>
              <HStack spacing="2">
                <Button onClick={onClose}>Abbrechen</Button>
                <Button type="submit" isLoading={isSubmitting}>
                  Speichern
                </Button>
              </HStack>
            </ModalFooter>
          </chakra.form>
        </ModalContent>
      </Modal>
    </>
  );
};
