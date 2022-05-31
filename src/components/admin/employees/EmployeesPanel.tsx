import React from 'react';
import { Box, Heading, useCheckboxGroup } from '@chakra-ui/react';
import { AdminEmployeeList } from './AdminEmployeeList';
import { EmployeesActions } from './EmployeesActions';

export const EmployeesPanel = () => {
  const { value, getCheckboxProps } = useCheckboxGroup();

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
        <EmployeesActions selectedEmployees={value.map((v) => v.toString())} />
      </Box>

      <AdminEmployeeList getCheckboxProps={getCheckboxProps} />
    </Box>
  );
};
