import React from 'react';
import { Box, Heading, useCheckboxGroup } from '@chakra-ui/react';
import { AdminTalentList } from './AdminTalentList';
import { TalentsActions } from './TalentsActions';

export const TalentsPanel = () => {
  const { value, getCheckboxProps } = useCheckboxGroup();

  return (
    <>
      <Heading size="md" mb="4">
        Talente verwalten
      </Heading>

      <Box
        bg="gray.200"
        mb="4"
        p="0"
        borderRadius="lg"
        padding="4"
        rounded="0px"
      >
        <TalentsActions selectedTalents={value.map((v) => v.toString())} />
      </Box>

      <Box>
        <AdminTalentList getCheckboxProps={getCheckboxProps} />
      </Box>
    </>
  );
};
