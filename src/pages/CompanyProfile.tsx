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
import { EditCompanyDialog } from '@/components/common/EditCompanyDialog';
import { Lehrstelle } from '@/api/@types';
import ReactMarkdown from 'react-markdown';

export const CompanyProfile = () => {
  const client = api(aspida());

  const { id } = useParams();

  const { getAccessTokenSilently } = useAuth0();

  const company = useQuery(['company', id], async () => {
    return getAccessTokenSilently().then(async (accessToken: string) => {
      if (!id) throw Error('Fehlende Firmen ID.');
      return await client.firmen._id(+id).$get({
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    });
  });

  if (company.isLoading) {
    return <Skeleton isLoaded={false} />;
  }

  if (company.isError) {
    return <Navigate to={`/error?message=${company.error}`} />;
  }

  return (
    <Container maxW="60%" bg="#E2E8F0" p="4">
      <EditCompanyDialog selectedCompanies={[company.data?.id ?? 0]} />
      <Flex>
        <Box>
          <HStack>
            <Avatar
              size="2xl"
              name={company.data?.firmenname}
              src="https://bit.ly/dan-abramov"
            />
            <Heading>{company.data?.firmenname}</Heading>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <UnorderedList>
            <ListItem>
              <strong>Adresse:</strong> {company.data?.strasse},{' '}
              {company.data?.plz} {company.data?.ort}
            </ListItem>
            <ListItem>
              <strong>Lehrstellen</strong>
              <UnorderedList>
                {company.data?.lehrstellen.map((lehrstelle: Lehrstelle) => (
                  <ListItem key={lehrstelle.id}>
                    {lehrstelle.lehrberuf.bezeichnung}
                  </ListItem>
                ))}
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
      <VStack>
        <Heading as="h2">Firmenportrait</Heading>
        <ReactMarkdown>
          {company.data?.firmenportrait ??
            'Noch keine Informationen vorhanden.'}
        </ReactMarkdown>
      </VStack>
    </Container>
  );
};
