import React from 'react';
import { HStack } from '@chakra-ui/react';
import { CreateCompanyDialog } from './dialogs/CreateCompanyDialog';
import { EditCompanyDialog } from './dialogs/EditCompanyDialog';

type CompaniesActionsProps = {
  selectedCompanies: string[];
};

export const CompaniesActions = ({
  selectedCompanies,
}: CompaniesActionsProps) => {
  return (
    <HStack>
      <CreateCompanyDialog />
      <EditCompanyDialog selectedCompanies={selectedCompanies} />
    </HStack>
  );
};
