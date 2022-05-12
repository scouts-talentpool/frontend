import React from 'react';
import { LinkBox, Flex, Text, Heading, LinkOverlay } from '@chakra-ui/react';
import { User } from '@/api/users';

type TalentProps = {
  talent: User;
};

export const Talent = ({ talent }: TalentProps) => {
  return (
    <LinkBox bg="gray.200" p="4">
      <Flex alignItems="center" justifyContent="left">
        <Heading size="sm">
          <LinkOverlay href={`/talents/${talent.id}`}>
            {talent.given_name} {talent.family_name}
          </LinkOverlay>
        </Heading>
        <Text size="sm" ml="4">
          {talent.email}
        </Text>
      </Flex>
    </LinkBox>
  );
};
