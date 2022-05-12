import React, { SyntheticEvent, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ActionDialog } from '@/components/base/ActionDialog';
import {
  chakra,
  FormControl,
  FormLabel,
  Input,
  Spinner,
} from '@chakra-ui/react';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { useMutation } from 'react-query';
import { Navigate } from 'react-router-dom';
import { TalentProfile } from '@/api/talents';
import { Role, User } from '@/api/users';

export const CreateTalentDialog = () => {
  const initialFocusRef = useRef<HTMLElement>(null);
  const finalFocusRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const firstnameInputRef = useRef<HTMLInputElement>(null);
  const lastnameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const client = api(aspida());

  const { getAccessTokenSilently } = useAuth0();

  const talentProfileMutation = useMutation(
    'talent',
    async (talent: TalentProfile) => {
      return getAccessTokenSilently().then(
        async (accessToken: string) =>
          await client.talents.$post({
            body: talent,
            headers: { Authorization: `Bearer ${accessToken}` },
          }),
      );
    },
  );

  const userMutation = useMutation('user', async (user: User) => {
    return getAccessTokenSilently().then(async (accessToken: string) => {
      return await client.users.$post({
        body: user,
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    });
  });

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    talentProfileMutation.mutate({
      id: '',
      birthdate: new Date(Date.now()),
    });

    if (talentProfileMutation.isLoading) return <Spinner />;

    if (talentProfileMutation.isError) {
      return <Navigate to={`/error?message=${talentProfileMutation.error}`} />;
    }

    userMutation.mutate({
      id: '',
      given_name: '',
      family_name: '',
      email: '',
      role: Role.TALENT,
      talentProfileId: talentProfileMutation.data?.id,
    });

    if (userMutation.isLoading) return <Spinner />;

    if (userMutation.isError) {
      return <Navigate to={`/error?message=${userMutation.error}`} />;
    }
  };

  return (
    <ActionDialog
      dialogTitle="Talent erstellen"
      initialFocusRef={initialFocusRef}
      finalFocusRef={finalFocusRef}
      formRef={formRef}
    >
      <chakra.form onSubmit={onSubmit} ref={formRef}>
        <FormControl isRequired mb="2">
          <FormLabel htmlFor="given_name">Vorname</FormLabel>
          <Input
            id="given_name"
            name="given_name"
            type="text"
            ref={firstnameInputRef}
          />
        </FormControl>
        <FormControl isRequired mb="2">
          <FormLabel htmlFor="family_name">Nachname</FormLabel>
          <Input
            id="family_name"
            name="family_name"
            type="text"
            ref={lastnameInputRef}
          />
        </FormControl>
        <FormControl isRequired mb="2">
          <FormLabel htmlFor="email">E-Mail Adresse</FormLabel>
          <Input id="email" name="email" type="email" ref={emailInputRef} />
        </FormControl>
      </chakra.form>
    </ActionDialog>
  );
};
