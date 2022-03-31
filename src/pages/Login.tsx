import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Heading, Skeleton, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { loginWithRedirect, user, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(-1);
  }, [user]);

  return (
    <Box>
      <Stack maxW={'50%'}>
        <Heading fontSize={24}>Wie benutzt du diese Platform?</Heading>
        <Button
          onClick={() => loginWithRedirect({ connection: 'google-oauth2' })}
        >
          Als Talent
        </Button>
        <Button onClick={() => loginWithRedirect({ connection: 'talentpool' })}>
          Als Firmenmitglied
        </Button>
        <Button
          onClick={() => loginWithRedirect({ connection: 'google-oauth2' })}
        >
          Als Administrator
        </Button>
      </Stack>
    </Box>
  );
};
