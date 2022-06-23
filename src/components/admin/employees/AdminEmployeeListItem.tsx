import React from 'react';
import { Benutzer } from '@/api/@types';
import { Checkbox, Flex, Box } from '@chakra-ui/react';
import { EmployeeListItem } from '@/components/common/EmployeeListItem';

type AdminEmployeeListItemProps = {
  employee: Benutzer;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getCheckboxProps: any;
};

export const AdminEmployeeListItem = ({
  employee,
  getCheckboxProps,
}: AdminEmployeeListItemProps) => {
  return (
    <Flex alignItems="center" key={employee.id}>
      <Checkbox {...getCheckboxProps({ value: employee.id })} />
      <Box width="100%" ml="4">
        <EmployeeListItem benutzer={employee} />
      </Box>
    </Flex>
  );
};
