import React, { SyntheticEvent } from 'react';
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
} from '@chakra-ui/react';

export const CreateEmployeeDialog = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onSubmit = (e: SyntheticEvent) => {
    console.log(e);
  };

  return (
    <>
      <Button onClick={onOpen} type="button">
        Mitarbeiter erstellen
      </Button>
      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <chakra.form onSubmit={onSubmit}>
            <ModalHeader>
              <Text size="sm">Talent erstellen</Text>
            </ModalHeader>
            <ModalBody>
              <Container p="2"></Container>
            </ModalBody>
            <ModalFooter>
              <HStack spacing="2">
                <Button onClick={onClose}>Abbrechen</Button>
                <Button type="submit">Speichern</Button>
              </HStack>
            </ModalFooter>
          </chakra.form>
        </ModalContent>
      </Modal>
    </>
  );
};
