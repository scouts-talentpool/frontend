import React from 'react';
import {
  LinkBox,
  Flex,
  Text,
  Heading,
  LinkOverlay,
  Stack,
} from '@chakra-ui/react';
import { CompanyProfile } from '@/api/companies';

type CompanyProps = {
  company: CompanyProfile;
};

export const Company = ({ company }: CompanyProps) => {
  return (
    <LinkBox bg="gray.200" p="4">
      <Flex alignItems="center" justifyContent="left">
        <Heading size="sm">
          <LinkOverlay href={`/companies/${company.id}`}>
            {company.name}
          </LinkOverlay>
        </Heading>
        <Text size="sm" ml="4">
          {company.location}
        </Text>
      </Flex>
    </LinkBox>
  );
};
