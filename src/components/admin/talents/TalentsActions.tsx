import React from 'react';
import { HStack } from '@chakra-ui/react';
// import { CreateTalentDialog } from './dialogs/CreateTalentDialog';
import { EditTalentDialog } from '@/components/common/EditTalentDialog';

type TalentsActionsProps = {
  selectedTalents: string[];
};

export const TalentsActions = ({ selectedTalents }: TalentsActionsProps) => {
  return (
    <HStack>
      {/* <CreateTalentDialog /> */}
      <EditTalentDialog selectedTalents={selectedTalents} />
    </HStack>
  );
};
