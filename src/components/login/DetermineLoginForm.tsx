import React from 'react';
import { Error } from '../../pages/Error';
import { GoogleLoginForm } from './GoogleLoginForm';
import { EmailPasswordLoginForm } from './EmailPasswordLoginForm';

type DetermineLoginFormProps = {
  userRole: string;
  email: string;
};

export const DetermineLoginForm = ({
  userRole,
  email,
}: DetermineLoginFormProps) => {
  switch (userRole) {
    case 'ADMIN':
    case 'TALENT':
      return <GoogleLoginForm email={email} />;
    case 'COMPANY':
      return <EmailPasswordLoginForm email={email} />;
    default:
      return <Error message="Bruh" />;
  }
};
