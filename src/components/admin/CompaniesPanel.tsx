import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { BaseButton } from '@/components/base/BaseButton';
import { CompanyList } from '../common/CompanyList';

export const CompaniesPanel = () => {
  return (
    <>
      <Box
        bg={'gray.100'}
        mb={4}
        p={0}
        borderRadius="lg"
        padding={4}
        rounded="0px"
      >
        <HStack justifyContent={'center'}>
          <BaseButton>Firma Hinzufügen</BaseButton>
          <BaseButton>Firma Editieren</BaseButton>
        </HStack>
      </Box>

      <Box>
        <CompanyList />
      </Box>
    </>
  );
};
