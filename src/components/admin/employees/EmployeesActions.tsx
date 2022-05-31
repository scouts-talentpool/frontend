import React from 'react';
import { HStack } from '@chakra-ui/react';
import { CreateEmployeeDialog } from './dialogs/CreateEmployeeDialog';
import { EditEmployeeDialog } from './dialogs/EditEmployeeDialog';

type EmployeesActionsProps = {
  selectedEmployees: string[];
};

export const EmployeesActions = ({
  selectedEmployees,
}: EmployeesActionsProps) => {
  return (
    <HStack>
      <CreateEmployeeDialog />
      <EditEmployeeDialog selectedEmployees={selectedEmployees} />
    </HStack>
  );
};
