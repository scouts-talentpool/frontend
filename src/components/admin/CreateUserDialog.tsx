import React, { SyntheticEvent, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  chakra,
  Stack,
  FormControl,
  StackItem,
  FormLabel,
  Button,
  Input,
} from '@chakra-ui/react';
import { createUser } from '@/lib/users';

export const CreateUserDialog = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [firstName, setFirstName] = useState<string | undefined>();
  const [lastName, setLastName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const token = await getAccessTokenSilently();
    await createUser(
      {
        email: email,
        // phone_number: '+199999999999999',
        // phone_verified: false,
        given_name: firstName,
        family_name: lastName,
        name: `${firstName} ${lastName}`,
        connection: 'talentpool',
        password: password,
        role: 'COMPANY',
      },
      token,
    );
  };

  return (
    <chakra.form
      method="POST"
      shadow="base"
      rounded={[null, 'md']}
      overflow={{ sm: 'hidden' }}
      onSubmit={handleSubmit}
    >
      <Stack px={4} py={5} p={[null, 6]} spacing={6}>
        <Stack>
          <FormControl as={StackItem}>
            <FormLabel htmlFor="first_name" fontSize="sm" fontWeight="md">
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
              rounded="md"
              defaultValue={firstName}
              onChange={(c) => setFirstName(c.target.value)}
            />
          </FormControl>

          <FormControl as={StackItem}>
            <FormLabel htmlFor="last_name" fontSize="sm" fontWeight="md">
              Nachnamen
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
              rounded="md"
              defaultValue={lastName}
              onChange={(c) => setLastName(c.target.value)}
            />
          </FormControl>

          <FormControl as={StackItem}>
            <FormLabel htmlFor="email_address" fontSize="sm" fontWeight="md">
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
              rounded="md"
              defaultValue={email}
              onChange={(c) => setEmail(c.target.value)}
            />
          </FormControl>

          <FormControl as={StackItem}>
            <FormLabel htmlFor="password" fontSize="sm" fontWeight="md">
              Passwort
            </FormLabel>
            <Input
              type="password"
              name="password"
              id="password"
              mt={1}
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              defaultValue={password}
              onChange={(c) => setPassword(c.target.value)}
            />
          </FormControl>
        </Stack>
        <Button type="submit">Erstellen</Button>
      </Stack>
    </chakra.form>
  );
};
