import React from 'react';
import { Routes as PageRoutes, Route, useParams } from 'react-router-dom';

import { ProtectedRoute } from './components/navigation/ProtectedRoute';

import { Home } from './pages/Home';
import { Talents } from './pages/Talents';
import { TalentProfile } from './pages/TalentProfile';
import { Companies } from './pages/Companies';
import { CompanyProfile } from './pages/CompanyProfile';
import { Admin } from './pages/Admin';
import { Error } from './pages/Error';
import { MyProfile } from './pages/MyProfile';

export const Routes = () => {
  return (
    <PageRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/companies/:id" element={<CompanyProfile />} />
      <Route path="/talents" element={<Talents />} />
      <Route path="/talents/:id" element={<TalentProfile />} />
      <Route path="/me" element={<ProtectedRoute component={MyProfile} />} />
      <Route path="/admin" element={<ProtectedRoute component={Admin} />} />
      <Route
        path="*"
        element={<Error message="Diese Seite konnte nicht gefunden werden." />}
      />
      <Route path="/error" element={<Error />} />
    </PageRoutes>
  );
};
