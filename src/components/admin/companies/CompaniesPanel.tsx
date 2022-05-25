import React from 'react';
import { Box, Heading, HStack } from '@chakra-ui/react';
import { AdminCompanyList } from './AdminCompanyList';
import { BaseButton } from '@/components/base/BaseButton';

export const CompaniesPanel = () => {
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

      <AdminCompanyList />
    </Box>
  );
};
