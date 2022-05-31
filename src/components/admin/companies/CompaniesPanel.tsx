import React from 'react';
import { Box, Heading, useCheckboxGroup } from '@chakra-ui/react';
import { AdminCompanyList } from './AdminCompanyList';
import { CompaniesActions } from './CompaniesActions';

export const CompaniesPanel = () => {
  const { value, getCheckboxProps } = useCheckboxGroup();

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
        <CompaniesActions selectedCompanies={value.map((v) => v.toString())} />
      </Box>

      <AdminCompanyList getCheckboxProps={getCheckboxProps} />
    </Box>
  );
};
