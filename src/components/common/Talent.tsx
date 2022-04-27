import React from 'react';
import { LinkBox, Flex, Text, Heading, LinkOverlay } from '@chakra-ui/react';
import { TalentProfile } from '@/api/talents';

type TalentProps = {
  talent: TalentProfile;
};

export const Talent = ({ talent }: TalentProps) => {
  return (
    <LinkBox>
      <Flex alignItems="center" justifyContent="space-evenly">
        <Heading size="sm">
          <LinkOverlay href={`/talents/${talent.id}`}>
            {talent.firstname} {talent.lastname}
          </LinkOverlay>
        </Heading>
      </Flex>
    </LinkBox>
  );
};
