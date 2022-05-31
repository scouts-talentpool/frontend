import React from 'react'
import { HStack, Avatar, Text } from '@chakra-ui/react'

export type UserOnelineProps = {
  profilePicture: string;
  name: string;
};

export const UserOneline = ({ profilePicture, name }: UserOnelineProps) => {
  return (
    <HStack p='1'>
      <Avatar size='sm' src={profilePicture} />
      <Text as='b' noOfLines={1}>{name}</Text>
    </HStack>
  );
}
