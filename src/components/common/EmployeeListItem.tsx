import React from 'react';
import { LinkBox, Flex, Text, Heading, LinkOverlay } from '@chakra-ui/react';
import { Benutzer } from '@/api/@types';

type EmployeeListItemProps = {
  benutzer: Benutzer;
};

export const EmployeeListItem = ({ benutzer }: EmployeeListItemProps) => {
  return (
    <LinkBox bg="gray.200" p="4">
      <Flex alignItems="center" justifyContent="left">
        <Heading size="sm">
          <LinkOverlay href={`/firmen/${benutzer.firma.id}`}>
            {benutzer.vorname} {benutzer.nachname}
          </LinkOverlay>
        </Heading>
        <Text size="sm" ml="4">
          {benutzer.firma.firmenname}
        </Text>
      </Flex>
    </LinkBox>
  );
};
