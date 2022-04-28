import React, { SyntheticEvent, useEffect } from 'react';
import { Box, Heading, HStack } from '@chakra-ui/react';
import { AdminCompanyList } from './AdminCompanyList';
import { BaseButton } from '@/components/base/BaseButton';
import { useCheckboxGroup } from '@chakra-ui/react';

export const CompaniesPanel = () => {
  const { value, getCheckboxProps } = useCheckboxGroup();
  useEffect(() => {
    console.log(value);
  }, []);

  return (
    <Box>
      <Heading size="md" mb="4">
        Firmen verwalten
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
          <BaseButton>Firma Hinzufügen</BaseButton>
          <BaseButton>Firma Editieren</BaseButton>
        </HStack>
      </Box>

      <AdminCompanyList checkboxProps={getCheckboxProps} />
    </Box>
  );
};
