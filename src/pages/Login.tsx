import React, { useState } from 'react';
import {
  Button,
  Input,
  Flex,
  Heading,
  InputGroup,
  Stack,
  Container,
  InputLeftElement,
  Box,
  Link,
  FormControl,
  FormHelperText,
  InputRightElement,
  Center,
  chakra,
  Skeleton,
} from '@chakra-ui/react';
import { BiShow, BiHide, BiLock, BiLockAlt, BiUser } from 'react-icons/bi';
import { useQuery } from 'react-query';

import { findLoginMethodByEmail } from '../lib/users';

// TODO: forgot password
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const loginMethod = useQuery(
    'loginMethod',
    async () => {
      return await findLoginMethodByEmail(email);
    },
    { enabled: false },
  );

  if (loginMethod.isLoading) {
    return <Skeleton isLoaded={!loginMethod.isLoading} />;
  }

  if (loginMethod.isError) {
    console.log(loginMethod.error);
  }

  return (
    <Flex width="full" justifyContent="center">
      <chakra.form
        onSubmit={(e) => {
          e.preventDefault();
          loginMethod.refetch();
        }}
      >
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<BiUser />} />
            <Input
              type="email"
              placeholder="max.muster@ict-scouts.ch"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <Input type="submit" value="Weiter" />
      </chakra.form>
    </Flex>
  );
};
