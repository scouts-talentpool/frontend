import React from 'react';
import { TabList, Tab } from '@chakra-ui/react';

export const AdminNavigation = () => {
  return (
    <TabList>
      <Tab>Firmen</Tab>
      <Tab>Mitarbeiter</Tab>
      <Tab>Talente</Tab>
    </TabList>
  );
};
