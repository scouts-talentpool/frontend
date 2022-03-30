import React from 'react';
import { Container } from '@chakra-ui/react';

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
        <Container>
          <Routes />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
