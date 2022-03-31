import { Box, Flex } from '@chakra-ui/react';
import { NavBar } from '../navigation/NavBar';

export const Footer = () => {
  return (
    <footer>
      <Box px={4} bg="gray.200">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <NavBar />
          <p>© 2022 Lian Studer & Kris Huber</p>
        </Flex>
      </Box>
    </footer>
  );
};
