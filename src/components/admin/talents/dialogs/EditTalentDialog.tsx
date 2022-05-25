import React, { useRef } from 'react';
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
import { useMutation, useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import {
  Benutzer,
  Talent,
  UpdateBenutzerDto,
  UpdateTalentDto,
} from '@/api/@types';

type EditTalentDialogProps = {
  selectedTalent: string;
  isDisabled: boolean;
};

export const EditTalentDialog = ({
  selectedTalent,
  isDisabled,
}: EditTalentDialogProps) => {
  const initialFocusRef = useRef<HTMLElement>(null);
  const finalFocusRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const firstnameInputRef = useRef<HTMLInputElement>(null);
  const lastnameInputRef = useRef<HTMLInputElement>(null);

  const client = api(aspida());

  const { getAccessTokenSilently } = useAuth0();

  const talent = useQuery('talent', async () => {
    return getAccessTokenSilently().then(
      async (accessToken: string) =>
        await client.talente._id(selectedTalent).$get({
          config: {
            headers: { Authorization: `Bearer ${accessToken}` },
          },
        }),
    );
  });

  const talentProfileMutation = useMutation(
    'talent',
    async (talent: UpdateTalentDto) => {
      return getAccessTokenSilently().then(
        async (accessToken: string) =>
          await client.talente._id(selectedTalent).$patch({
            body: talent,
            config: {
              headers: { Authorization: `Bearer ${accessToken}` },
            },
          }),
      );
    },
  );

  const userMutation = useMutation('user', async (user: UpdateBenutzerDto) => {
    return getAccessTokenSilently().then(async (accessToken: string) => {
      return await client.benutzer._id(selectedTalent).$patch({
        body: user,
        config: {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      });
    });
  });

  const onSubmit = () => {
    talentProfileMutation.mutate({});

    if (talentProfileMutation.isLoading) return <Spinner />;

    if (talentProfileMutation.isError) {
      return <Navigate to={`/error?message=${talentProfileMutation.error}`} />;
    }

    userMutation.mutate({});

    if (userMutation.isLoading) return <Spinner />;

    if (userMutation.isError) {
      return <Navigate to={`/error?message=${userMutation.error}`} />;
    }
  };

  if (talent.isLoading) return <Spinner />;

  if (talent.isError) {
    return <Navigate to={`/error?message=${talent.error}`} />;
  }

  return (
    <ActionDialog
      dialogTitle="Talent bearbeiten"
      initialFocusRef={initialFocusRef}
      finalFocusRef={finalFocusRef}
      formRef={formRef}
      isDisabled={isDisabled}
    >
      <chakra.form onSubmit={onSubmit} ref={formRef}>
        <FormControl isRequired mb="2">
          <FormLabel htmlFor="given_name">Vorname</FormLabel>
          <Input
            id="given_name"
            name="given_name"
            type="text"
            value={talent.data?.vorname}
            ref={firstnameInputRef}
          />
        </FormControl>
        <FormControl isRequired mb="2">
          <FormLabel htmlFor="family_name">Nachname</FormLabel>
          <Input
            id="family_name"
            name="family_name"
            type="text"
            value={talent.data?.nachname}
            ref={lastnameInputRef}
          />
        </FormControl>
      </chakra.form>
    </ActionDialog>
  );
};
