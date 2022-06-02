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
  Select,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Firma } from '@/api/@types';

type EditEmployeeDialogProps = {
  selectedEmployees: string[];
};

type MitarbeiterUpdateInput = {
  vorname: string;
  nachname: string;
  email: string;
  firmaId: number;
};

export const EditEmployeeDialog = ({
  selectedEmployees,
}: EditEmployeeDialogProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<MitarbeiterUpdateInput>();

  const onSubmit: SubmitHandler<MitarbeiterUpdateInput> = (newEmployee) => {
    console.log(newEmployee);
  };

  const firmen: Firma[] = [
    {
      id: 1,
      firmenname: 'CSS Krankenversicherung',
      ort: 'Luzern',
      plz: 6002,
      strasse: 'Tribschenstrasse 21',
      links: [],
      lehrstellen: [],
      firmenportrait: '',
    },
  ];

  return (
    <>
      <Button
        onClick={onOpen}
        type="button"
        isDisabled={selectedEmployees.length === 0}
      >
        Mitarbeiter bearbeiten
      </Button>
      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <chakra.form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>
              <Text size="sm">Mitarbeiter bearbeiten</Text>
            </ModalHeader>
            <ModalBody>
              <Container p="4">
                <chakra.fieldset border="2px" p="4">
                  <chakra.legend fontWeight="bold">Benutzer</chakra.legend>

                  <FormControl isInvalid={!!errors.vorname}>
                    <FormLabel htmlFor="vorname">Vorname</FormLabel>
                    <Input
                      id="vorname"
                      placeholder="Max"
                      {...register('vorname')}
                    />
                    <FormErrorMessage>
                      {errors.vorname && errors.vorname.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.nachname}>
                    <FormLabel htmlFor="nachname">Nachname</FormLabel>
                    <Input
                      id="nachname"
                      placeholder="Muster"
                      {...register('nachname')}
                    />
                    <FormErrorMessage>
                      {errors.nachname && errors.nachname.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      id="email"
                      placeholder="max.muster@ict-scouts.ch"
                      {...register('email')}
                    />
                    <FormErrorMessage>
                      {errors.email && errors.email.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.firmaId}>
                    <FormLabel htmlFor="firmaId">Firma</FormLabel>
                    <Select
                      id="firmaId"
                      placeholder="Firma auswählen"
                      {...register('firmaId')}
                    >
                      {firmen.map((firma) => (
                        <option key={firma.id} value={firma.id}>
                          {firma.firmenname}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.firmaId && errors.firmaId.message}
                    </FormErrorMessage>
                  </FormControl>
                </chakra.fieldset>
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
