import React, { ReactNode } from 'react';
import { Center, Flex, Image, Stack } from '@chakra-ui/react';

type HorizontalCardProps = {
  imgUrl: string;
  children: ReactNode;
};

export const HorizontalCard = ({ imgUrl, children }: HorizontalCardProps) => {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg="#FEFEFE"
        boxShadow="md"
        padding={4}
        rounded="0px"
      >
        <Flex flex={1} bg="blue.200">
          <Image objectFit="cover" boxSize="100%" src={imgUrl} />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          {children}
        </Stack>
      </Stack>
    </Center>
  );
};

export default HorizontalCard;
