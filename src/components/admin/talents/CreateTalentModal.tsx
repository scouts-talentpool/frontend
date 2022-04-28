import React, { useState } from 'react'
import { Modal } from '@chakra-ui/react';

export type CreateTalentModalProps {
  isOpen: boolean;
};

export const CreateTalentModal = ({ isOpen }: CreateTalentModalProps) => {
  const [firstName, setFirstName] = useState<string | undefined>();
  const [lastName, setLastName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();

  return (
      <Modal
        isOpen={isOpen}
        onClose={() => setCreateModalIsOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Talent Hinzufügen</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum lalaldsklds ipsumipsu lmipsumipsumipsumipsum
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
        </ModalContent>

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
                      onChange={(c) => setCreateFirstName(c.target.value)}
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

  )
}

