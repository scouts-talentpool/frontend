import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Skeleton,
  Spacer,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { useQuery } from 'react-query';
import { EditCompanyDialog } from '@/components/common/EditCompanyDialog';
import { Lehrstelle } from '@/api/@types';
import ReactMarkdown from 'react-markdown';

export const CompanyProfile = async () => {
  const client = api(aspida());

  const { id } = useParams();

  const { user, getAccessTokenSilently } = useAuth0();

  const company = useQuery(['company', id], async () => {
    return getAccessTokenSilently().then(async (accessToken: string) => {
      if (!id) throw Error('Fehlende Firmen ID.');
      return await client.firmen._id(+id).$get({
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    });
  });

  const isEmployee = async () => {
    return getAccessTokenSilently().then(async (accessToken: string) => {
      if (!user || !user.sub) throw Error('Benutzer hat keine gültige ID.');
      const benutzer = await client.benutzer._authId(user.sub.split('|')[1]).$get({
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return benutzer?.firmaId === company?.data?.id
    });
  }

  if (company.isLoading) {
    return <Skeleton isLoaded={false} />;
  }

  if (company.isError) {
    return <Navigate to={`/error?message=${company.error}`} />;
  }

  return (
    <Container maxW="80%" bg="#E2E8F0" p="4">
      <Box m="2" mb="5">
        {await isEmployee() ? (
          <EditCompanyDialog selectedCompanies={[company.data?.id ?? 0]} />
        ) : (
          <></>
        )}
      </Box>
      <Flex>
        <Box w="500px">
          <HStack>
            <Avatar
              size="2xl"
              name={company.data?.firmenname}
              src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
            />
            <Heading>{company.data?.firmenname}</Heading>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <List>
            <ListItem>
              <strong>Adresse</strong><br/>
              {company.data?.strasse +
                ' ' +
                company.data?.plz +
                ' ' +
                company.data?.ort}
            </ListItem>
            <ListItem>
              <strong>Lehrstellen</strong>
              <List>
                {company.data?.lehrstellen.map((lehrstelle: Lehrstelle) => (
                  <ListItem key={lehrstelle.id}>
                    {lehrstelle.lehrberuf.bezeichnung}
                  </ListItem>
                ))}
              </List>
            </ListItem>
          </List>
        </Box>
      </Flex>
      <VStack mt="4">
        <Heading as="h2">Firmenportrait</Heading>
        <ReactMarkdown>
          {company.data?.firmenportrait ??
            'Noch keine Informationen vorhanden.'}
        </ReactMarkdown>
      </VStack>
    </Container>
  );
};
