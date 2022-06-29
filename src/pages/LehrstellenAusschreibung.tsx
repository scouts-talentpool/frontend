import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  ListItem,
  Skeleton,
  Spacer,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { useQuery } from 'react-query';
import { Lehrstelle } from '@/api/@types';
import ReactMarkdown from 'react-markdown';

export const LehrstellenAusschreibung = () => {
  const client = api(aspida());

  const { id } = useParams();

  const { getAccessTokenSilently } = useAuth0();

  const lehrstelle = useQuery(['lehrstelle', id], async () => {
    return getAccessTokenSilently().then(async (accessToken: string) => {
      if (!id) throw Error('Fehlende Lehrstellen ID.');
      return await client.lehrstellen._id(+id).$get({
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    });
  });

  if (lehrstelle.isLoading) {
    return <Skeleton isLoaded={false} />;
  }

  if (lehrstelle.isError) {
    return <Navigate to={`/error?message=${lehrstelle.error}`} />;
  }

  return (<>
    <Container maxW="60%" bg="#E2E8F0" p="4">
      <Flex>
        <Box>
            <Heading>{lehrstelle.data?.lehrberuf.bezeichnung}</Heading>
        </Box>
        <Spacer />
        <Box>
          <UnorderedList>
            <ListItem>
              <strong>Startjahr</strong> {lehrstelle.data?.startjahr}
            </ListItem>
            <ListItem>
              <strong>Lehrbetrieb</strong> {lehrstelle.data?.firma.firmenname}
            </ListItem>
            <ListItem>
              <strong>Ausbildungsorte</strong>
              <UnorderedList>
                {lehrstelle.data?.ausbildungsorte.map((ort: string) => (
                  <ListItem key={ort}>
                    {ort}
                  </ListItem>
                ))}
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
      <VStack>
        <Heading as="h2">Ausbildungskonzept</Heading>
        <ReactMarkdown>
          {lehrstelle.data?.ausbildungskonzept ??
            'Noch keine Informationen vorhanden.'}
        </ReactMarkdown>
      </VStack>
    </Container>
  </>);
};

