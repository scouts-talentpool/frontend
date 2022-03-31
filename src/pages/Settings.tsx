import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Image,
  Button,
  chakra,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  StackItem,
} from '@chakra-ui/react';

// const audience = process.env.REACT_APP_AUTH0_AUDIENCE || '';

const handleChangePicture = () => {
  window.open('https://gravatar.com', '_blank')?.focus();
};

export const Settings = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  console.log(user);
  const [accessToken, setAccessToken] = useState<string>();
  const [firstName, setFirstName] = useState<string | undefined>(
    user?.given_name,
  );
  const [lastName, setLastName] = useState<string | undefined>(
    user?.family_name,
  );
  const [email, setEmail] = useState<string | undefined>(user?.email);

  useEffect(() => {
    getAccessTokenSilently().then(async (accessToken: string) => {
      setAccessToken(accessToken);
    });
  }, [user, getAccessTokenSilently]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch(
      `https://dev-bu6i95zb.auth0.com/api/v2/users/${user?.sub?.split('|')[1]}`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          given_name: firstName,
          family_name: lastName,
          email: email,
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
          Audience: 'https://dev-bu6i95zb.us.auth0.com/api/v2/',
        }),
      },
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
      <Stack
        px={4}
        py={5}
        p={[null, 6]}
        bg={useColorModeValue('white', 'gray.900')}
        spacing={6}
      >
        <Stack>
          <FormControl as={StackItem}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color={useColorModeValue('gray.700', 'gray.50')}
            >
              Profilbild
            </FormLabel>
            <Flex alignItems="center" mt={1}>
              <Image src={user && user.picture} maxWidth={16} />
              <Button
                type="button"
                ml={5}
                variant="outline"
                size="sm"
                fontWeight="medium"
                _focus={{ shadow: 'none' }}
                onClick={handleChangePicture}
              >
                Ändern
              </Button>
            </Flex>
          </FormControl>

          <FormControl as={StackItem}>
            <FormLabel
              htmlFor="first_name"
              fontSize="sm"
              fontWeight="md"
              color={useColorModeValue('gray.700', 'gray.50')}
            >
              Vornamen
            </FormLabel>
            <Input
              type="text"
              name="first_name"
              id="first_name"
              autoComplete="given-name"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              defaultValue={firstName}
              onChange={(c) => setFirstName(c.target.value)}
            />
          </FormControl>

          <FormControl as={StackItem}>
            <FormLabel
              htmlFor="last_name"
              fontSize="sm"
              fontWeight="md"
              color={useColorModeValue('gray.700', 'gray.50')}
            >
              Nachname
            </FormLabel>
            <Input
              type="text"
              name="last_name"
              id="last_name"
              autoComplete="family-name"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              defaultValue={lastName}
              onChange={(c) => setLastName(c.target.value)}
            />
          </FormControl>

          <FormControl as={StackItem}>
            <FormLabel
              htmlFor="email_address"
              fontSize="sm"
              fontWeight="md"
              color={useColorModeValue('gray.700', 'gray.50')}
            >
              Email Addresse
            </FormLabel>
            <Input
              type="text"
              name="email_address"
              id="email_address"
              autoComplete="email"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              defaultValue={email}
              onChange={(c) => setEmail(c.target.value)}
            />
          </FormControl>
        </Stack>
        <Button type="submit">Speichern</Button>
      </Stack>
    </chakra.form>
  );
};
