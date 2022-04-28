import React from 'react';
import { Box, Heading, HStack } from '@chakra-ui/react';
import { BaseButton } from '@/components/base/BaseButton';
import { AdminTalentList } from './AdminTalentList';

export const TalentsPanel = () => {
  return (
    <>
      <Heading size="md" mb="4">
        Talente verwalten
      </Heading>

      <Box
        bg={'gray.100'}
        mb={4}
        p={0}
        borderRadius="lg"
        padding={4}
        rounded="0px"
      >
        <HStack justifyContent={'center'}>
          <BaseButton>Talent Hinzufügen</BaseButton>
          <BaseButton>Talent Editieren</BaseButton>
        </HStack>
      </Box>

      <Box>
        <AdminTalentList />
      </Box>
    </>
  );
};
