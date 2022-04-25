import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import { BiLock } from 'react-icons/bi';

type EmailPasswordLoginFormProps = {
  email: string;
};

export const EmailPasswordLoginForm = ({
  email,
}: EmailPasswordLoginFormProps) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<BiLock />} />
      <Input type="password" placeholder="myPassword" />
    </InputGroup>
  );
};
