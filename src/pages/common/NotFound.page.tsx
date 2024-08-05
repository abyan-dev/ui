import { Center, Text, Title, Stack, Button, Anchor } from '@mantine/core';

export function NotFoundPage() {
  return (
    <Center>
      <Stack align="center">
        <Title>Not Found</Title>
        <Text mb="sm" className="text-md w-[55%] text-center text-zinc-400">
          The page you are trying to open does not exist. You may have mistyped the address, or the page
          has been moved to another URL.
        </Text>
        <Anchor href="/">
          <Button size="lg" variant="outline" color="teal">
            Go to home page
          </Button>
        </Anchor>
      </Stack>
    </Center>
  );
}
