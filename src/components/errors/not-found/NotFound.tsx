import { Center, Text, Title, Stack, Button, Anchor } from '@mantine/core';

export function NotFound() {
    return (
        <Center>
            <Stack align="center">
                <Title>Not Found</Title>
                <Text className="text-md w-[55%] text-center text-zinc-400">Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL.</Text>
                <Anchor href="/">
                    <Button variant="outline" color="teal">Go to home page</Button>
                </Anchor>
            </Stack>
        </Center>
    );
}