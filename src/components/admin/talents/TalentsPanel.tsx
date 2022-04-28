import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { BaseButton } from '@/components/base/BaseButton';
import { TalentList } from '@/components/common/TalentList'

export const TalentsPanel = () => {
  return (
    <>

      <Box
        bg={'gray.200'}
        mb={4}
        p={0}
        // borderWidth="1px"
        borderRadius="lg"
        // boxShadow="md"
        padding={4}
        rounded="0px"
      >
        <HStack justifyContent={'center'}>
          <BaseButton>Talent Hinzufügen</BaseButton>
          <BaseButton>Talent Editieren</BaseButton>
        </HStack>
      </Box>

      <Box>
          <TalentList />
      </Box>
    </>
  );
};
