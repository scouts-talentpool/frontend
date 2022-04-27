import React from 'react';
import { BaseButton } from './BaseButton';
import HorizontalCard from './HorizontalCard';
import { Heading, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type ProfileCardProps = {
  id: string;
  imgUrl: string;
  title: string;
  location: string;
  about: string;
  linkPrefix?: string;
};

export const ProfileCard = ({
  id,
  imgUrl,
  title,
  location,
  about,
  linkPrefix,
}: ProfileCardProps) => {
  return (
    <HorizontalCard imgUrl={imgUrl}>
      {/* Title */}
      {linkPrefix ? (
        <Link to={`${linkPrefix}/${id}`}>
          <Heading textAlign="center" fontWeight="bold" fontSize={24}>
            {title}
          </Heading>
        </Link>
      ) : (
        <Link to={`/company/${id}`}>
          <Heading textAlign="center" fontWeight="bold" fontSize={24}>
            {title}
          </Heading>
        </Link>
      )}

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