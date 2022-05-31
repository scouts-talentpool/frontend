import React, { useState } from 'react'
import { Container,
  Box,
  Code,
  Flex,
  Spacer,
  Heading,
  Text,
  Avatar,
  VStack,
  HStack,
  Image,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';

export const DummyProfile = () => {
  const profilePicture = 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png';
  const vname = 'Dummy';
  const nname = '🤖';
  const plz = '6000';
  const wohnort = 'links rechts';
  const lehrbeginn = '2040';
  const campus = 'cSS'
  const wunschberufe = ['Informatiker FH', 'Mathematiker (Berechner)']

  return (
    <Container maxW='60%' bg='#E2E8F0' p='4'>
      <Flex>
        <Box>
          <HStack>
            <Avatar size='2xl' name={vname + ' ' + nname} src='https://bit.ly/dan-abramov' />
            <Heading>{vname + ' ' + nname}</Heading>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <UnorderedList>
            <ListItem><strong>Wohnort:</strong> {plz + ' ' + wohnort}</ListItem>
            <ListItem><strong>Lehrbeginn:</strong> {lehrbeginn}</ListItem>
            <ListItem><strong>Campus:</strong> {campus}</ListItem>
            <ListItem>
              <strong>Wunschberufe</strong>
              <UnorderedList>
              {wunschberufe.map((wunschberuf) =>
                <ListItem>{wunschberuf}</ListItem>
              )}
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
      <VStack>
        <Heading as='h2'>About</Heading>
        <Code variant='subtle'>
          # Hello i am Dummy 🤖 <br/>
          &gt; This is my custom markdown profile
        </Code>
      </VStack>
    </Container>
  );
}
