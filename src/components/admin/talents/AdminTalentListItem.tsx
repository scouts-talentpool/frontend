import React from 'react';
import { Benutzer } from '@/api/@types';
import { TalentListItem } from '@/components/common/TalentListItem';
import { Checkbox, Flex, Box } from '@chakra-ui/react';

type AdminTalentListItemProps = {
  benutzer: Benutzer;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getCheckboxProps: any;
};

export const AdminTalentListItem = ({
  benutzer,
  getCheckboxProps,
}: AdminTalentListItemProps) => {
  return (
    <Flex alignItems="center" key={benutzer.id}>
      <Checkbox {...getCheckboxProps({ value: benutzer.authId })} />
      <Box width="100%" ml="4">
        <TalentListItem benutzer={benutzer} />
      </Box>
    </Flex>
  );
};
