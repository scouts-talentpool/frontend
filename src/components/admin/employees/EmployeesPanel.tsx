import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { AdminEmployeeList } from './AdminEmployeeList';

export const EmployeesPanel = () => {
  return (
    <Box>
      <Heading size="md" mb="4">
        Mitarbeiter verwalten
      </Heading>
      <AdminEmployeeList />
    </Box>
  );
};
