import React from 'react';
import { Container,
  Heading,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  TabList
} from '@chakra-ui/react';
import { TimelineEntry } from '@/components/base/TimelineEntry';
import { Center, Heading } from '@chakra-ui/react';

/*
  maybe split into multiple components => (User is Logged in homepage, Not logged in homepage)
  or make `/home` a protected route with login page redirect
 */
export const Home = () => {
  return (
    <Container maxW='60%'>
      <Tabs>
        <TabList>
          <Tab>Timeline</Tab>
          <Tab>Explore</Tab>
          <Tab>Following</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading>Timeline</Heading>
            {/*
              Timeline with events of all followd companies / talents
              
              3x Dummy Entries Below:
            */}
            <TimelineEntry />
            <TimelineEntry />
            <TimelineEntry />
          </TabPanel>
          <TabPanel>
            <Heading>Explore</Heading>
            {/*
              Logic to render either companies if talent or talents if company 
              */}
          </TabPanel>
          <TabPanel>
            <Heading>Following</Heading>
            {/*
              On this tab display the followed talents / companies
            */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};
