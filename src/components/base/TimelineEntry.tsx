import React from 'react'
import { Text, Avatar, HStack } from '@chakra-ui/react';

type TimelineEntryProps = {
  profilePicture: string;
  name: string;
  action: string;
  time: string;
}

export const TimelineEntry = ({profilePicture, name, action, time}: TimelineEntryProps) => {
  return(
    <HStack p='1'>
      <Avatar size='xs' src={profilePicture} />
      <Text as='b' noOfLines={1}>{name}</Text>
      <Text noOfLines={2}>{action}</Text>
      <Text noOfLines={1} color='#57606a'>{time}</Text>
    </HStack>
  );
}
