import React, { MutableRefObject, ReactNode } from 'react';
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
} from '@chakra-ui/react';

type ActionDialogProps = {
  children: ReactNode;
  dialogTitle: string;
  initialFocusRef: MutableRefObject<HTMLElement | null>;
  finalFocusRef: MutableRefObject<HTMLElement | null>;
  formRef: MutableRefObject<HTMLFormElement | null>;
  isDisabled?: boolean;
};

export const ActionDialog = ({
  children,
  dialogTitle,
  initialFocusRef,
  finalFocusRef,
  formRef,
  isDisabled = false,
}: ActionDialogProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} type="button" isDisabled={isDisabled}>
        {dialogTitle}
      </Button>
      <Modal
        size="full"
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialFocusRef}
        finalFocusRef={finalFocusRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text size="sm">{dialogTitle}</Text>
          </ModalHeader>
          <ModalBody>
            <Container p="2">{children}</Container>
          </ModalBody>
          <ModalFooter>
            <HStack spacing="2">
              <Button onClick={onClose}>Abbrechen</Button>
              <Button onClick={() => formRef.current?.requestSubmit()}>
                Speichern
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
