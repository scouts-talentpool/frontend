import React from 'react';
import { Routes as PageRoutes, Route } from 'react-router-dom';

import {
  ProtectedRoute,
  AdminProtectedRoute,
} from './components/navigation/ProtectedRoute';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Talents } from './pages/Talents';
import { TalentProfile } from './pages/TalentProfile';
import { Settings } from './pages/Settings';
import { Companies } from './pages/Companies';
import { CompanyDetails } from './pages/CompanyDetails';
import { Admin } from './pages/Admin/Admin';
import { Error } from './pages/Error';

export const Routes = () => {
  return (
    <PageRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path=""></Route>
      <Route
        path="/settings"
        element={<ProtectedRoute outlet={<Settings />} />}
      />
      <Route path="/companies" element={<Companies />}></Route>
      <Route path="/companies/:id" element={<CompanyDetails />}></Route>
      <Route path="/talents" element={<Talents />}></Route>
      <Route path="/talents/:id" element={<TalentProfile />}></Route>
      <Route
        path="/admin"
        element={<AdminProtectedRoute outlet={<Admin />} />}
      ></Route>
      <Route
        path="*"
        element={<Error message="Diese Seite konnte nicht gefunden werden." />}
      ></Route>
    </PageRoutes>
  );
};
