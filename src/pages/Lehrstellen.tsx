import React, { useState } from 'react';
import { Flex, Button, HStack, Stack } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import aspida from '@aspida/axios';
import api from '@/api/$api';
import { LehrstellenListItem } from '@/components/common/LehrstellenListItem';

export const Lehrstellen = () => {
    const client = api(aspida());

    const [cursor, setCursor] = useState<number>(1);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [take, _] = useState<number>(25);

    const { getAccessTokenSilently } = useAuth0();

    const lehrstellen = useQuery(
        ['lehrstellen', cursor],
        async () => {
            return getAccessTokenSilently().then(
                async (accessToken: string) =>
                    await client.lehrstellen.$get({
                        headers: { Authorization: `Bearer ${accessToken}` },
                        query: {
                            take: take,
                            cursor: cursor,
                        },
                    }),
            );
        },
        { keepPreviousData: true },
    );

    return (
        <Flex direction="column"> 
            <Stack>
                {lehrstellen.data?.map((lehrstelle) => (
                    <LehrstellenListItem lehrstelle={lehrstelle} key={lehrstelle.id} />
                ))}
            </Stack>
            <HStack mt="4">
                <Button
                    onClick={() => {
                        if (cursor > 0) {
                            setCursor((old) => old - take);
                        }
                    }}
                    disabled={cursor === 1}
                >
                    Previous
                </Button>
                <Button
                    onClick={() => {
                        if (!lehrstellen.isPreviousData) {
                            setCursor((old) => old + take);
                        }
                    }}
                    disabled={lehrstellen.isPreviousData}
                >
                    Next
                </Button>
            </HStack>
        </Flex>
    );
}
