import React from 'react';
import { LinkBox, Flex, Text, Heading, LinkOverlay } from '@chakra-ui/react';
import { Firma } from '@/api/@types';

type CompanyListItemProps = {
  company: Firma;
};

export const CompanyListItem = ({ company }: CompanyListItemProps) => {
  return (
    <LinkBox bg="gray.200" p="4">
      <Flex alignItems="center" justifyContent="left">
        <Heading size="sm">
          <LinkOverlay href={`/firmen/${company.id}`}>
            {company.firmenname}
          </LinkOverlay>
        </Heading>
        <Text size="sm" ml="4">
          {company.ort}
        </Text>
      </Flex>
    </LinkBox>
  );
};
