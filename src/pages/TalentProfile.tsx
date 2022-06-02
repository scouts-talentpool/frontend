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
import { EditTalentDialog } from '@/components/common/EditTalentDialog';

export const TalentProfile = () => {
  const client = api(aspida());

  const { id } = useParams();

  const { getAccessTokenSilently, user } = useAuth0();

  const benutzer = useQuery(['benutzer', id], async () => {
    return getAccessTokenSilently().then(async (accessToken: string) => {
      if (!id) throw Error('Fehlende Talent ID.');
      return await client.benutzer._authId(id).$get({
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    });
  });

  if (benutzer.isLoading) {
    return <Skeleton isLoaded={false} />;
  }

  if (benutzer.isError) {
    return <Navigate to={`/error?message=${benutzer.error}`} />;
  }

  return (
    <Container maxW="60%" bg="#E2E8F0" p="4">
      {benutzer.data?.authId === user?.sub?.split('|')[1] ? (
        <EditTalentDialog selectedTalents={[benutzer.data?.authId ?? '']} />
      ) : (
        <></>
      )}

      <Flex>
        <Box>
          <HStack>
            <Avatar
              size="2xl"
              name={benutzer.data?.vorname + ' ' + benutzer.data?.nachname}
              src="https://bit.ly/dan-abramov"
            />
            <Heading>
              {benutzer.data?.vorname + ' ' + benutzer.data?.nachname}
            </Heading>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <UnorderedList>
            <ListItem>
              <strong>Wohnort:</strong>{' '}
              {benutzer.data?.talent.plz + ' ' + benutzer.data?.talent.wohnort}
            </ListItem>
            <ListItem>
              <strong>Lehrbeginn:</strong> {benutzer.data?.talent.abschlussjahr}
            </ListItem>
            <ListItem>
              <strong>Campus:</strong>{' '}
              {benutzer.data?.talent.campus.bezeichnung}
            </ListItem>
            <ListItem>
              <strong>Wunschberufe</strong>
              <UnorderedList>
                {benutzer.data?.talent.wunschberufe.map(
                  (wunschberuf: Lehrberuf) => (
                    <ListItem key={wunschberuf.id}>
                      {wunschberuf.bezeichnung}
                    </ListItem>
                  ),
                )}
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
      <VStack>
        <Heading as="h2">Meine Stärken</Heading>
        <ReactMarkdown>
          {benutzer.data?.talent.meineStaerken ??
            'Noch keine Informationen vorhanden.'}
        </ReactMarkdown>
      </VStack>
      <VStack>
        <Heading as="h2">Was ich am Campus am liebsten mache</Heading>
        <ReactMarkdown>
          {benutzer.data?.talent.lieblingsCampusAktivitaet ??
            'Noch keine Informationen vorhanden.'}
        </ReactMarkdown>
      </VStack>
    </Container>
  );
};
