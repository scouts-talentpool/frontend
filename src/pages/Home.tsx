import { Image } from '@chakra-ui/image';
import React from 'react';
import bus from '@/assets/bus.jpg';
import { Center, Stack } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Center>
      <Stack>
        {Array.from(Array(10).keys()).map(() => (
          <Image src={bus} height="300px" width="1000px" />
        ))}
      </Stack>
    </Center>
  );
};
