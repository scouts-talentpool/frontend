import React from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { AdminNavigation } from '@/components/admin/AdminNavigation';
import { TalentsPanel } from '@/components/admin/TalentsPanel';
import { EmployeesPanel } from '@/components/admin/EmployeesPanel';
import { CompaniesPanel } from '@/components/admin/CompaniesPanel';

export const Admin = () => {
  return (
    <Tabs>
      <AdminNavigation />
      <TabPanels>
        <TabPanel>
          <CompaniesPanel />
        </TabPanel>
        <TabPanel>
          <EmployeesPanel />
        </TabPanel>
        <TabPanel>
          <TalentsPanel />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
