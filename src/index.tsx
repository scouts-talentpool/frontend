import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        audience={import.meta.env.VITE_API_URL}
        redirectUri={window.location.origin}
      >
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Auth0Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
