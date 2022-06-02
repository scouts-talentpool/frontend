import React from 'react';
import { LinkBox, Flex, Text, Heading, LinkOverlay } from '@chakra-ui/react';
import { Benutzer } from '@/api/@types';

type TalentListItemProps = {
  benutzer: Benutzer;
};

export const TalentListItem = ({ benutzer }: TalentListItemProps) => {
  return (
    <LinkBox bg="gray.200" p="4">
      <Flex alignItems="center" justifyContent="left">
        <Heading size="sm">
          <LinkOverlay href={`/talente/${benutzer.authId}`}>
            {benutzer.vorname} {benutzer.nachname}
          </LinkOverlay>
        </Heading>
        <Text size="sm" ml="4">
          {benutzer.talent.wohnort}
        </Text>
      </Flex>
    </LinkBox>
  );
};
