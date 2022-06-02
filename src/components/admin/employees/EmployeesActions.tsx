import React from 'react';
import { HStack } from '@chakra-ui/react';
import { CreateEmployeeDialog } from '@/components/common/CreateEmployeeDialog';
import { EditEmployeeDialog } from '@/components/common/EditEmployeeDialog';

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
