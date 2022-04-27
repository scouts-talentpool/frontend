import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { Box, Heading, Text, Link, Container } from '@chakra-ui/react';

type ErrorProps = {
  message?: string;
};

export const Error = ({ message }: ErrorProps) => {
  const [messageParam] = useSearchParams();

  return (
    <Box textAlign="center">
      <Container p={3}>
        <Heading as="h2" mb={1}>
          Fehler
        </Heading>
        <Text>{message ?? messageParam}</Text>
      </Container>

      <Link to="/" as={NavLink} mt={8}>
        Zurück zur Hauptseite
      </Link>
    </Box>
  );
};

export default Error;
