import React from 'react';
import aspida from '@aspida/axios';
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
import { Campus, Benutzer, Talent } from '@/api/@types';
import api from '@/api/$api';
import { useMutation } from 'react-query';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

type EditTalentDialogProps = {
  selectedTalents: string[];
};

export const EditTalentDialog = ({
  selectedTalents,
}: EditTalentDialogProps) => {
  const client = api(aspida());
  const { getAccessTokenSilently } = useAuth0();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Benutzer>();

  const updateData = useMutation(async (editedData: Benutzer) => {
    const { talent, ...editedBenutzer } = editedData;

    return getAccessTokenSilently().then(async (accessToken: string) => {
      const updatedBenutzer = await client.benutzer
        ._authId(selectedTalents[0])
        .$patch({
          headers: { Authorization: `Bearer ${accessToken}` },
          body: editedBenutzer,
        });
      return await client.talente._id(updatedBenutzer.talent.id).$patch({
        headers: { Authorization: `Bearer ${accessToken}` },
        body: talent,
      });
    });
  });

  const onSubmit: SubmitHandler<Benutzer> = (editedData) => {
    updateData.mutateAsync(editedData).then((talent) => {
      navigate(`/talente/${talent.id}`);
    });
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
                <chakra.fieldset border="0px" p="4">
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
                <chakra.fieldset border="0px" p="4" mt="4">
                  <chakra.legend fontWeight="bold">Talent</chakra.legend>

                  <FormControl isInvalid={!!errors.talent?.abschlussjahr}>
                    <FormLabel htmlFor="abschlussjahr">Abschlussjahr</FormLabel>
                    <Input
                      id="abschlussjahr"
                      placeholder="2022"
                      {...register('talent.abschlussjahr')}
                    />
                    <FormErrorMessage>
                      {errors.talent?.abschlussjahr &&
                        errors.talent?.abschlussjahr.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.talent?.campus}>
                    <FormLabel htmlFor="campus">Campus</FormLabel>
                    <Select
                      id="campus"
                      placeholder="Campus auswählen"
                      {...register('talent.campus')}
                    >
                      {campus.map((campus) => (
                        <option key={campus.id} value={campus.id}>
                          {campus.bezeichnung}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.talent?.campus &&
                        errors.talent?.campus.id?.message}
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
