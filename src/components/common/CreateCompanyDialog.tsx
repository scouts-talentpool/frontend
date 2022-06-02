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
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FirmaCreateInput = {
  firmenname: string;
  strasse: string;
  plz: number;
  ort: string;
  firmenportrait: string;
};

export const CreateCompanyDialog = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FirmaCreateInput>();

  const onSubmit: SubmitHandler<FirmaCreateInput> = (newCompany) => {
    console.log(newCompany);
  };

  return (
    <>
      <Button onClick={onOpen} type="button">
        Firma erstellen
      </Button>
      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <chakra.form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>
              <Text size="sm">Firma erstellen</Text>
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
