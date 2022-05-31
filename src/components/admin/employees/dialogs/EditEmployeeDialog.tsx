import React, { SyntheticEvent } from 'react';
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
} from '@chakra-ui/react';

type EditEmployeeDialogProps = {
  selectedEmployees: string[];
};

export const EditEmployeeDialog = ({
  selectedEmployees,
}: EditEmployeeDialogProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onSubmit = (e: SyntheticEvent) => {
    console.log(e);
  };

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
          <chakra.form onSubmit={onSubmit}>
            <ModalHeader>
              <Text size="sm">Employee bearbeiten</Text>
            </ModalHeader>
            <ModalBody></ModalBody>
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
