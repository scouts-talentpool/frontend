import React from 'react';
import { Firma } from '@/api/@types';
import { CompanyListItem } from '@/components/common/CompanyListItem';
import { Checkbox, Flex, Box } from '@chakra-ui/react';

type AdminCompanyListItemProps = {
  company: Firma;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getCheckboxProps: any;
};

export const AdminCompanyListItem = ({
  company,
  getCheckboxProps,
}: AdminCompanyListItemProps) => {
  return (
    <Flex alignItems="center" key={company.id}>
      <Checkbox {...getCheckboxProps({ value: company.id })} />
      <Box width="100%" ml="4">
        <CompanyListItem company={company} />
      </Box>
    </Flex>
  );
};
