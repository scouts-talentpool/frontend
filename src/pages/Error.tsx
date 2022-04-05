import { NavLink } from 'react-router-dom';
import React from 'react';
import { Box, Heading, Text, Link, Container } from '@chakra-ui/react';

type ErrorProps = {
  message: string;
};

export const Error = ({ message }: ErrorProps) => {
  return (
    <Box textAlign="center">
      <Container p={3}>
        <Heading as="h2" mb={1}>
          Fehler
        </Heading>
        <Text>{message}</Text>
      </Container>

      <Link to="/" as={NavLink} mt={8}>
        Zurück zur Hauptseite
      </Link>
    </Box>
  );
};

export default Error;
