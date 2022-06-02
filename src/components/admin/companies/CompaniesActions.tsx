import React from 'react';
import { HStack } from '@chakra-ui/react';
import { CreateCompanyDialog } from '@/components/common/CreateCompanyDialog';
import { EditCompanyDialog } from '@/components/common/EditCompanyDialog';

type CompaniesActionsProps = {
  selectedCompanies: number[];
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
