import React from 'react';
import { Routes as PageRoutes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import {
  ProtectedRoute,
  AdminProtectedRoute,
} from './components/navigation/ProtectedRoute';

import { Home } from './pages/Home';
import { Talents } from './pages/Talents';
import { TalentProfile } from './pages/TalentProfile';
import { Companies } from './pages/Companies';
import { CompanyDetails } from './pages/CompanyDetails';
import { Admin } from './pages/Admin/Admin';
import { Error } from './pages/Error';

export const Routes = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <PageRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/companies/:id" element={<CompanyDetails />} />
      <Route path="/talents" element={<Talents />} />
      <Route path="/talents/:id" element={<TalentProfile />} />
      <Route
        path="/admin"
        element={<AdminProtectedRoute outlet={<Admin />} />}
      />
      <Route
        path="*"
        element={<Error message="Diese Seite konnte nicht gefunden werden." />}
      />
    </PageRoutes>
  );
};
