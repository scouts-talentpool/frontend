import React, { SyntheticEvent } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { AdminCompanyList } from './AdminCompanyList';

export const CompaniesPanel = () => {
  return (
    <Box>
      <Heading size="md" mb="4">
        Firmen verwalten
      </Heading>
      <AdminCompanyList />
    </Box>
  );
};
