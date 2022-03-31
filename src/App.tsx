import React from 'react';
import { Box, Container, Skeleton } from '@chakra-ui/react';

// Components
import { Header } from './components/partials/Header';
import { Footer } from './components/partials/Footer';

import './styles/main.scss';
import { Routes } from './Routes';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  return (
    <div id="app">
      <Skeleton isLoaded={!isLoading}>
        <Header />
        <main>
          <Box bg="gray.50">
            <Routes />
          </Box>
        </main>
        <Footer />
      </Skeleton>
    </div>
  );
}

export default App;
