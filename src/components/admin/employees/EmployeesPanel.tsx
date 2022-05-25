import React from 'react';
import { Box, Heading, HStack } from '@chakra-ui/react';
import { AdminEmployeeList } from './AdminEmployeeList';
import { BaseButton } from '@/components/base/BaseButton';

export const EmployeesPanel = () => {
  return (
    <Box>
      <Heading size="md" mb="4">
        Mitarbeiter verwalten
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
          <BaseButton>Mitarbeiter Hinzufügen</BaseButton>
          <BaseButton>Mitarbeiter Editieren</BaseButton>
        </HStack>
      </Box>

      <AdminEmployeeList />
    </Box>
  );
};
