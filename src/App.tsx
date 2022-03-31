import React from 'react';
import { Box, Container } from '@chakra-ui/react';

// Components
import { Header } from './components/partials/Header';
import { Footer } from './components/partials/Footer';

import './styles/main.scss';
import { Routes } from './Routes';

function App() {
  return (
    <div id="app">
      <Header />
      <main>
        <Box bg="gray.50">
          <Routes />
        </Box>
      </main>
      <Footer />
    </div>
  );
}

export default App;
