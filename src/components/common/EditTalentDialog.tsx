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
  Input,
  chakra,
  Container,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Campus } from '@/api/@types';

type TalentUpdateInput = {
  plz: number;
  wohnort: string;
  abschlussjahr: number;
  meineStaerken: string;
  lieblingsCampusAktivitaet: string;
  campusId: number;
};

type BenutzerUpdateInput = {
  vorname: string;
  nachname: string;
  email: string;
};

type EditTalentDialogProps = {
  selectedTalents: string[];
};

export const EditTalentDialog = ({
  selectedTalents,
}: EditTalentDialogProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<TalentUpdateInput & BenutzerUpdateInput>();

  const onSubmit: SubmitHandler<TalentUpdateInput & BenutzerUpdateInput> = (
    newTalent,
  ) => {
    console.log(newTalent);
  };

  const campus: Campus[] = [
    {
      id: 1,
      bezeichnung: 'CSS ICT Campus Zentralschweiz',
      ort: 'Luzern',
      plz: 6002,
      strasse: 'Tribschenstrasse 21',
      links: [],
    },
    {
      id: 2,
      bezeichnung: 'ICT Campus Thun',
      ort: 'Thun',
      plz: 1000,
      strasse: 'Thunerstrasse 0',
      links: [],
    },
  ];

  return (
    <>
      <Button
        onClick={onOpen}
        type="button"
        isDisabled={selectedTalents.length === 0}
      >
        Talent bearbeiten
      </Button>
      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <chakra.form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>
              <Text size="sm">Talent bearbeiten</Text>
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
                </chakra.fieldset>
                <chakra.fieldset border="2px" p="4" mt="4">
                  <chakra.legend fontWeight="bold">Talent</chakra.legend>

                  <FormControl isInvalid={!!errors.abschlussjahr}>
                    <FormLabel htmlFor="abschlussjahr">Abschlussjahr</FormLabel>
                    <Input
                      id="abschlussjahr"
                      placeholder="2022"
                      {...register('abschlussjahr')}
                    />
                    <FormErrorMessage>
                      {errors.abschlussjahr && errors.abschlussjahr.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.campusId}>
                    <FormLabel htmlFor="campusId">Campus</FormLabel>
                    <Select
                      id="campusId"
                      placeholder="Campus auswählen"
                      {...register('campusId')}
                    >
                      {campus.map((campus) => (
                        <option key={campus.id} value={campus.id}>
                          {campus.bezeichnung}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.campusId && errors.campusId.message}
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
