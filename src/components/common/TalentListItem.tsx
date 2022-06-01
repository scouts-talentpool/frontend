import React from 'react';
import { LinkBox, Flex, Text, Heading, LinkOverlay } from '@chakra-ui/react';
import { Talent as TalentObject } from '@/api/@types';

type TalentListItemProps = {
  talent: TalentObject;
};

export const TalentListItem = ({ talent }: TalentListItemProps) => {
  return (
    <LinkBox bg="gray.200" p="4">
      <Flex alignItems="center" justifyContent="left">
        <Heading size="sm">
          <LinkOverlay href={`/talente/${talent.id}`}>
            {talent.benutzer.vorname} {talent.benutzer.nachname}
          </LinkOverlay>
        </Heading>
        <Text size="sm" ml="4">
          {talent.wohnort}
        </Text>
      </Flex>
    </LinkBox>
  );
};
