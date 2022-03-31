import { useAuth0 } from '@auth0/auth0-react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../../assets/ICT_LOGO_schwarz_transparent.png';

import { NavBar } from '../navigation/NavBar';
// import { UserMenu } from './UserMenu';

export const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <header>
      <Box px={4} bg="gray.200">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Link to="/">
            <Image src={Logo} alt="ICT-Scouts Logo" w="96px" />
          </Link>

          <NavBar />
          {/* {isAuthenticated ? <UserMenu /> : <></>} */}
        </Flex>
      </Box>
    </header>
  );
};
