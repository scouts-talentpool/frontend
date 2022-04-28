import React from 'react';
import { Button } from '@chakra-ui/react';

type BaseButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const BaseButton = ({ children, onClick }: BaseButtonProps) => {
  return (
    <Button
      rounded="0px"
      bg="#F7FAFC"
      border="1px"
      borderColor="gray.200"
      boxShadow="md"
      _focus={{}}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
