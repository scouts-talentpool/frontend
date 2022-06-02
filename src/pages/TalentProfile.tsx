import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Skeleton } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { useQuery } from 'react-query';
import ReactMarkdown from 'react-markdown';
import {
  Container,
  Box,
  Flex,
  Spacer,
  Heading,
  Avatar,
  VStack,
  HStack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { Lehrberuf } from '@/api/@types';

export const TalentProfile = () => {
  const client = api(aspida());

  const { id } = useParams();

  const { getAccessTokenSilently } = useAuth0();

  const talent = useQuery(['talent', id], async () => {
    return getAccessTokenSilently().then(async (accessToken: string) => {
      if (!id) throw Error('Fehlende Talent ID.');
      return await client.talente._id(+id).$get({
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    });
  });

  if (talent.isLoading) {
    return <Skeleton isLoaded={false} />;
  }

  if (talent.isError) {
    return <Navigate to={`/error?message=${talent.error}`} />;
  }

  return (
    <Container maxW="60%" bg="#E2E8F0" p="4">
      <Flex>
        <Box>
          <HStack>
            <Avatar
              size="2xl"
              name={
                talent.data?.benutzer.vorname +
                ' ' +
                talent.data?.benutzer.nachname
              }
              src="https://bit.ly/dan-abramov"
            />
            <Heading>
              {talent.data?.benutzer.vorname +
                ' ' +
                talent.data?.benutzer.nachname}
            </Heading>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <UnorderedList>
            <ListItem>
              <strong>Wohnort:</strong>{' '}
              {talent.data?.plz + ' ' + talent.data?.wohnort}
            </ListItem>
            <ListItem>
              <strong>Lehrbeginn:</strong> {talent.data?.abschlussjahr}
            </ListItem>
            <ListItem>
              <strong>Campus:</strong> {talent.data?.campus.bezeichnung}
            </ListItem>
            <ListItem>
              <strong>Wunschberufe</strong>
              <UnorderedList>
                {talent.data?.wunschberufe.map((wunschberuf: Lehrberuf) => (
                  <ListItem key={wunschberuf.id}>
                    {wunschberuf.bezeichnung}
                  </ListItem>
                ))}
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
      <VStack>
        <Heading as="h2">About</Heading>
        <ReactMarkdown># Hello World!</ReactMarkdown>
      </VStack>
    </Container>
  );
};
