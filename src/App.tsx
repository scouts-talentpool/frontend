import React from 'react';
import { Box, Skeleton, chakra } from '@chakra-ui/react';

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
        <chakra.main bg="gray.50" height="100vh" py="2.5rem">
          <Routes />
        </chakra.main>
        <Footer />
      </Skeleton>
    </div>
  );
}

export default App;
