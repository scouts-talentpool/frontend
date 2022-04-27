import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Flex, Image, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/ICT_LOGO_schwarz_transparent.png';

import { NavBar } from '../navigation/NavBar';
import { NavMenu } from '../navigation/NavMenu';

export const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <header>
      <Box px={4} bg="gray.200">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Link to="/">
            <Image src={Logo} alt="ICT-Scouts Logo" w="96px" />
          </Link>

          <Stack direction="row" spacing={5}>
            <NavBar />
            {isAuthenticated ? <NavMenu /> : <></>}
          </Stack>
        </Flex>
      </Box>
    </header>
  );
};
