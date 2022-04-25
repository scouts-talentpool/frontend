import React from 'react';
import { BaseButton } from '../base/BaseButton';
import HorizontalCard from '../base/HorizontalCard';
import { Heading, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type TalentCardProps = {
  id: string;
  imgUrl: string;
  name: string;
  location: string;
  about: string;
};

export const TalentCard = ({
  id,
  imgUrl,
  name,
  location,
  about,
}: TalentCardProps) => {
  return (
    <HorizontalCard imgUrl={imgUrl}>
      {/* Title */}
      <Link to={`/company/${id}`}>
        <Heading textAlign="center" fontWeight="bold" fontSize={24}>
          {name}
        </Heading>
      </Link>

      {/* Location */}
      {location ? (
        <Text size="sm" mb={4} as="i" color="gray.700">
          {location}
        </Text>
      ) : (
        <></>
      )}

      {/* About */}
      <Text textAlign="center" as="i" px={3}>
        {about}
      </Text>

      <Stack
        width={'100%'}
        mt={'2rem'}
        direction={'row'}
        padding={2}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <BaseButton>Message</BaseButton>
        <BaseButton>Follow</BaseButton>
      </Stack>
    </HorizontalCard>
  );
};
