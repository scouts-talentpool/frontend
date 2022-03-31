import React from 'react';
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BaseButton } from './BaseButton';

export const HorizontalCard = () => {
  return (
    <Center py={6}>
      <Stack
        borderWidth="0px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('#FEFEFE', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
        rounded="0px"
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              'https://www.architekturbibliothek.ch/wp-content/uploads/2018/10/6003.01a_Kantonalbank.jpg'
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >

        <Heading textAlign="center" as="" fontWeight="bold" fontSize={24}>
            Luzerner Kantonalbank
        </Heading>
        <Text size="sm" mb={4} as="i" color="gray.700">
            Location Ipsum
        </Text>
        <Text textAlign="center" as="i" px={3}>
            About Ipsum Lorem Ipsum dolor
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
        </Stack>
      </Stack>
    </Center>
  );
};

export default HorizontalCard;
