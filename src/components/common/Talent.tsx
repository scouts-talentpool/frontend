import React from 'react';
import { LinkBox, Flex, Text, Heading, LinkOverlay } from '@chakra-ui/react';
import { Talent as TalentObject } from '@/api/@types';

type TalentProps = {
  talent: TalentObject;
};

export const Talent = ({ talent }: TalentProps) => {
  return (
    <LinkBox bg="gray.200" p="4">
      <Flex alignItems="center" justifyContent="left">
        <Heading size="sm">
          <LinkOverlay href={`/talents/${talent.id}`}>
            {talent.vorname} {talent.nachname}
          </LinkOverlay>
        </Heading>
        <Text size="sm" ml="4">
          {talent.wohnort}
        </Text>
      </Flex>
    </LinkBox>
  );
};
