import React from 'react';
import { TimelineEntry } from '@/components/base/TimelineEntry';
import { UserOneline } from '@/components/common/UserOneline';
import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';

export const UserHome = () => {
  return (
    <Container maxW="100%">
      <Grid templateColumns="0.6fr 2fr 0.8fr" gap="6">
        <GridItem>
          <Box
            p="4"
            rounded="0px"
            bg="#F7FAFC"
            border="1px"
            borderColor="#E2E8F0"
          >
            <Text as="b">Following</Text>
            <UserOneline
              profilePicture="https://thispersondoesnotexist.com/image"
              name="Person"
            />
          </Box>
        </GridItem>
        <GridItem>
          <Box
            p="4"
            rounded="0px"
            bg="#F7FAFC"
            border="1px"
            borderColor="#E2E8F0"
          >
            <Text as="b">Timeline</Text>
            <TimelineEntry
              profilePicture="https://thispersondoesnotexist.com/image"
              name="Person"
              action="added a new project"
              time="yesterday"
            />
            <Divider />
            <TimelineEntry
              profilePicture="https://thispersondoesnotexist.com/image"
              name="Person"
              action="edited their about me"
              time="yesterday"
            />
          </Box>
        </GridItem>
        <GridItem>
          <Box
            p="4"
            rounded="0px"
            bg="#F7FAFC"
            border="1px"
            borderColor="#E2E8F0"
          >
            <Text as="b">Explore</Text>
            {/* displayed here should be actions from not followed users */}
            <UserOneline
              profilePicture="https://thispersondoesnotexist.com/image"
              name="Being Living"
            />
            <UserOneline
              profilePicture="https://thispersondoesnotexist.com/image"
              name="Carbon Human"
            />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};
