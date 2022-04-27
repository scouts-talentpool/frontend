import React from 'react';
import { LinkBox, Flex, Text, Heading, LinkOverlay } from '@chakra-ui/react';
import { CompanyProfile } from '@/api/companies';

type CompanyProps = {
  company: CompanyProfile;
};

export const Company = ({ company }: CompanyProps) => {
  return (
    <LinkBox>
      <Flex alignItems="center" justifyContent="space-evenly">
        <Heading size="sm">
          <LinkOverlay href={`/companies/${company.id}`}>
            {company.name}
          </LinkOverlay>
        </Heading>
      </Flex>
    </LinkBox>
  );
};
