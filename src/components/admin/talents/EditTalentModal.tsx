import React from 'react'
import { Modal } from '@chakra-ui/react';

export type EditTalentModalProps {
  isOpen: boolean;
};

export const EditTalentModal = ({ isOpen }: EditTalentModalProps) => {
  const [firstName, setFirstName] = useState<string | undefined>('Max');
  const [lastName, setLastName] = useState<string | undefined>('Muster');
  const [email, setEmail] = useState<string | undefined>('max@muster.com');

  return (
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

  )
}

