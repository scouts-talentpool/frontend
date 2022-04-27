import React from 'react';
import { CompanyList } from '../common/CompanyList';
import { Box, Center, Stack, Image, Flex } from '@chakra-ui/react';
import { BaseButton } from '../base/BaseButton';

export const CompaniesPanel = () => {
  return (
    <>
      {/* actions */}
      <Box
        bg={'gray.100'} 
        m={4}
        p={0}
        borderWidth="1px"
        borderRadius="lg"
        direction={{ base: 'column', md: 'row' }}
        boxShadow="md"
        padding={4}
        rounded="0px"
      >
        <BaseButton>Create Company</BaseButton>
        <BaseButton>Edit Company</BaseButton>
      </Box>

      <CompanyList />
    </>
  );
};
