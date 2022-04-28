import React, { useState } from 'react';
import {
  Box,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Button,
  chakra,
  Stack,
  FormControl,
  FormLabel,
  StackItem,
  Input,
} from '@chakra-ui/react';
import { BaseButton } from '@/components/base/BaseButton';
import { AdminTalentList } from './AdminTalentList';

export const TalentsPanel = () => {
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [createFirstName, setCreateFistName] = useState<string | undefined>();
  const [createLastName, setCreateLastName] = useState<string | undefined>();
  const [createEmail, setCreateEmail] = useState<string | undefined>();

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [editFirstName, setEditFirstName] = useState<string | undefined>('Max');
  const [editLastName, setEditLastName] = useState<string | undefined>('Muster');
  const [editEmail, setEditEmail] = useState<string | undefined>('max@muster.com');

  return (
    <>
      <Heading size="md" mb="4">
        Talente verwalten
      </Heading>

      <Box
        bg="gray.200"
        mb="4"
        p="0"
        borderRadius="lg"
        padding="4"
        rounded="0px"
      >
        <HStack justifyContent="center">
          <BaseButton onClick={() => setCreateModalIsOpen(true)}>
            Talent Hinzufügen
          </BaseButton>
          <BaseButton onClick={() => setEditModalIsOpen(true)}>
            Talent Editieren
          </BaseButton>
        </HStack>
      </Box>

      <Modal
        isOpen={createModalIsOpen}
        onClose={() => setCreateModalIsOpen(false)}
      >
        <ModalHeader>Talent Hinzufügen</ModalHeader>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Talent Hinzufügen</ModalHeader>
          <ModalCloseButton />
          <chakra.form
            method="POST"
            rounded="0px"
            overflow={{ sm: 'hidden' }}
            onSubmit={() => null}
          >
            <ModalBody>
              <Stack px={4} py={5} p={[null, 6]} spacing={6}>
                <Stack>
                  <FormControl as={StackItem}>
                    <FormLabel
                      htmlFor="first_name"
                      fontSize="sm"
                      fontWeight="md"
                    >
                      Vornamen
                    </FormLabel>
                    <Input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      mt={1}
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="0px"
                      defaultValue={createFirstName}
                      onChange={(c) => setCreateFistName(c.target.value)}
                    />
                  </FormControl>
                  <FormControl as={StackItem}>
                    <FormLabel
                      htmlFor="last_name"
                      fontSize="sm"
                      fontWeight="md"
                    >
                      Nachname
                    </FormLabel>
                    <Input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      mt={1}
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="0px"
                      defaultValue={createLastName}
                      onChange={(c) => setCreateLastName(c.target.value)}
                    />
                  </FormControl>
                  <FormControl as={StackItem}>
                    <FormLabel
                      htmlFor="email_address"
                      fontSize="sm"
                      fontWeight="md"
                    >
                      Email Addresse
                    </FormLabel>
                    <Input
                      type="text"
                      name="email_address"
                      id="email_address"
                      autoComplete="email"
                      mt={1}
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="0px"
                      defaultValue={createEmail}
                      onChange={(c) => setCreateEmail(c.target.value)}
                    />
                  </FormControl>
                </Stack>
              </Stack>
            </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              colorScheme="blue"
              mr={3}
              onClick={() => setCreateModalIsOpen(false)}
            >
              Abbrechen
            </Button>
            <Button colorScheme="blue">Hinzufügen</Button>
          </ModalFooter>
          </chakra.form>
        </ModalContent>
      </Modal>

      <Modal isOpen={editModalIsOpen} onClose={() => setEditModalIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Talent Editieren</ModalHeader>
          <ModalCloseButton />
          <chakra.form
            method="POST"
            rounded="0px"
            overflow={{ sm: 'hidden' }}
            onSubmit={() => null}
          >
            <ModalBody>
              <Stack px={4} py={5} p={[null, 6]} spacing={6}>
                <Stack>
                  <FormControl as={StackItem}>
                    <FormLabel
                      htmlFor="first_name"
                      fontSize="sm"
                      fontWeight="md"
                    >
                      Vornamen
                    </FormLabel>
                    <Input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      mt={1}
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="0px"
                      defaultValue={editFirstName}
                      onChange={(c) => setEditFirstName(c.target.value)}
                    />
                  </FormControl>
                  <FormControl as={StackItem}>
                    <FormLabel
                      htmlFor="last_name"
                      fontSize="sm"
                      fontWeight="md"
                    >
                      Nachname
                    </FormLabel>
                    <Input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      mt={1}
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="0px"
                      defaultValue={editLastName}
                      onChange={(c) => setEditLastName(c.target.value)}
                    />
                  </FormControl>
                  <FormControl as={StackItem}>
                    <FormLabel
                      htmlFor="email_address"
                      fontSize="sm"
                      fontWeight="md"
                    >
                      Email Addresse
                    </FormLabel>
                    <Input
                      type="text"
                      name="email_address"
                      id="email_address"
                      autoComplete="email"
                      mt={1}
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="0px"
                      defaultValue={editEmail}
                      onChange={(c) => setEditEmail(c.target.value)}
                    />
                  </FormControl>
                </Stack>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="ghost"
                colorScheme="blue"
                rounded="0px"
                mr={3}
                onClick={() => setEditModalIsOpen(false)}
              >
                Abbrechen
              </Button>
              <Button type="submit" colorScheme="blue" rounded="0px">
                Änderungen Speichern
              </Button>
            </ModalFooter>
          </chakra.form>
        </ModalContent>
      </Modal>

      <Box>
        <AdminTalentList checkboxProps={getCheckboxProps} />
      </Box>
    </>
  );
};
