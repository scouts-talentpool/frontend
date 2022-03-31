import React from 'react';
import {
  BrowserRouter as Router,
  Routes as PageRoutes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';

import ProtectedRoute from './components/navigation/ProtectedRoute';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Talents } from './pages/Talents';
import { TalentProfile } from './pages/TalentProfile';
import { Settings } from './pages/Settings';
import { Companies } from './pages/Companies';
import { CompanyDetails } from './pages/CompanyDetails';
import { Admin } from './pages/Admin/Admin';
import { Error } from './pages/Error';
import { useAuth0 } from '@auth0/auth0-react';

export const Routes = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();

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
        element={<ProtectedRoute outlet={<Admin />} />}
      ></Route>
      <Route
        path="*"
        element={<Error message="Diese Seite konnte nicht gefunden werden." />}
      ></Route>
    </PageRoutes>
  );
};
