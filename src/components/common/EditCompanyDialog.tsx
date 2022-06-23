import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Button,
  ModalBody,
  ModalFooter,
  HStack,
  chakra,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Firma } from '@/api/@types';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

type EditCompanyDialogProps = {
  selectedCompanies: number[];
};

export const EditCompanyDialog = ({
  selectedCompanies,
}: EditCompanyDialogProps) => {
  const client = api(aspida());
  const { getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<Firma>();

  const updateCompany = useMutation(async (editedCompany: Firma) => {
    return getAccessTokenSilently().then(
      async (accessToken: string) =>
        await client.firmen._id(selectedCompanies[0]).$patch({
          headers: { Authorization: `Bearer ${accessToken}` },
          body: editedCompany,
        }),
    );
  });

  const onSubmit: SubmitHandler<Firma> = (editedCompany) => {
    updateCompany.mutateAsync(editedCompany).then((company) => {
      navigate(`/firmen/${company.id}`);
    });
  };

  return (
    <>
      <Button
        onClick={onOpen}
        type="button"
        isDisabled={selectedCompanies.length === 0}
      >
        Firma bearbeiten
      </Button>
      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <chakra.form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>
              <Text size="sm">Firma bearbeiten</Text>
            </ModalHeader>
            <ModalBody>
              <Container p="4">
                <FormControl isInvalid={!!errors.firmenname}>
                  <FormLabel htmlFor="firmenname">Firmenname</FormLabel>
                  <Input
                    id="firmenname"
                    placeholder="CSS Krankenversicherung"
                    {...register('firmenname')}
                  />
                  <FormErrorMessage>
                    {errors.firmenname && errors.firmenname.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.strasse}>
                  <FormLabel htmlFor="strasse">Strasse</FormLabel>
                  <Input
                    id="strasse"
                    placeholder="Tribschenstrasse 21"
                    {...register('strasse')}
                  />
                  <FormErrorMessage>
                    {errors.strasse && errors.strasse.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.plz}>
                  <FormLabel htmlFor="plz">PLZ</FormLabel>
                  <Input id="plz" placeholder="6002" {...register('plz')} />
                  <FormErrorMessage>
                    {errors.plz && errors.plz.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.ort}>
                  <FormLabel htmlFor="ort">Ort</FormLabel>
                  <Input id="ort" placeholder="Luzern" {...register('ort')} />
                  <FormErrorMessage>
                    {errors.ort && errors.ort.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.firmenportrait}>
                  <FormLabel htmlFor="firmenportrait">Firmenportrait</FormLabel>
                  <Input
                    id="firmenportrait"
                    placeholder="Firmenportrait"
                    {...register('firmenportrait')}
                  />
                  <FormErrorMessage>
                    {errors.firmenportrait && errors.firmenportrait.message}
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
