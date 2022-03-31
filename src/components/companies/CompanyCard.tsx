import React from 'react';
import { BaseButton } from '../base/BaseButton';
import HorizontalCard from '../base/HorizontalCard';
import { Heading, Stack, Text } from '@chakra-ui/react';

type CompanyCardProps = {
  imgUrl: string;
  title: string;
  location: string;
  about: string;
};

export const CompanyCard = ({
  imgUrl,
  title,
  location,
  about,
}: CompanyCardProps) => {
  return (
    <HorizontalCard imgUrl={imgUrl}>
      {/* Title */}
      <Heading textAlign="center" fontWeight="bold" fontSize={24}>
        {title}
      </Heading>

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
