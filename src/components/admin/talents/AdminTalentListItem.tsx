import React from 'react';
import { Talent } from '@/api/@types';
import { TalentListItem } from '@/components/common/TalentListItem';
import { Checkbox, Flex, Box } from '@chakra-ui/react';

type AdminTalentListItemProps = {
  talent: Talent;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getCheckboxProps: any;
};

export const AdminTalentListItem = ({
  talent,
  getCheckboxProps,
}: AdminTalentListItemProps) => {
  return (
    <Flex alignItems="center" key={talent.id}>
      <Checkbox {...getCheckboxProps({ value: talent.id })} />
      <Box width="100%" ml="4">
        <TalentListItem talent={talent} />
      </Box>
    </Flex>
  );
};
