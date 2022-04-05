import React, { SyntheticEvent, useState } from 'react';
import {
  Button,
  Input,
  Flex,
  Heading,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
  Link,
  FormControl,
  FormHelperText,
  InputRightElement,
  Center,
  chakra,
} from '@chakra-ui/react';
import { BiShow, BiHide, BiLock, BiLockAlt } from 'react-icons/bi';

// TODO: forgot password
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authMethod, setAuthMethod] = useState('google-oauth2');

  /*
   * 1. Enter Email
   * 2. Get User Role
   * 3. Show Google/Password
   */

  const responseGoogle = (res: any) => {
    console.log(res);
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h2">Login</Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
          <chakra.form>
            <Stack spacing={4} p="1rem" boxShadow="md">
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaUserAlt style={{ fill: 'lightgray' }} />}
                  />
                  <Input
                    type="email"
                    placeholder="Email Adresse"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormControl>

              {authMethod != null ? (
                authMethod === AuthMethod.INTERNAL ? (
                  // % % Password % %
                  <FormControl onSubmit={submitLogin}>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        children={<FaLock style={{ fill: 'lightgray' }} />}
                      />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Passwort"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <InputRightElement width="3.1rem">
                        <Button
                          h="1.75rem"
                          size="sm"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <BiHide /> : <BiShow />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormHelperText textAlign="right">
                      <Link>Passwort vergessen?</Link>
                    </FormHelperText>
                  </FormControl>
                ) : (
                  // % % Google % %
                  <Center>
                    <Flex>
                      <GoogleLogin
                        clientId="88947083280-p9vmftafikev3e1m2scct856bdtvj5mm.apps.googleusercontent.com"
                        render={(renderProps) => (
                          <Button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                          >
                            Weiter mit Google
                          </Button>
                        )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                      />
                    </Flex>
                  </Center>
                )
              ) : (
                <></>
              )}

              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                width="full"
              >
                Weiter
              </Button>
            </Stack>
          </chakra.form>
        </Box>
      </Stack>
    </Flex>
  );
};
