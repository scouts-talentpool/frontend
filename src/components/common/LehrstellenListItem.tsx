import React from 'react';
import { Flex, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { Lehrstelle } from '@/api/@types';

type LehrstellenListItemProps = {
    lehrstelle: Lehrstelle;
};

export const LehrstellenListItem = ({ lehrstelle }: LehrstellenListItemProps) => {
    return (
        <LinkBox bg="gray.200" p="4">
            <Flex alignItems="center" justifyContent="left">
                <Heading size="sm">
                    <LinkOverlay href={`/lehrstellen/${lehrstelle.id}`}>
                        {lehrstelle.lehrberuf.bezeichnung}
                    </LinkOverlay>
                </Heading>
                <Text size="sm" ml="4">
                    {lehrstelle.firmaId} 
                </Text>
            </Flex>
        </LinkBox>
    )
};
