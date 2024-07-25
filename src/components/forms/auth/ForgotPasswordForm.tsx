import { siteConfig } from '@/config/site';
import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

export function ForgotPasswordForm() {
  return (
    <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
      <TextInput label="Your email" placeholder="Your email..." required />
      <Group justify="space-between" mt="lg">
        <Anchor c="dimmed" size="sm" href={siteConfig.pages.Login}>
          <Center inline className="hover:text-zinc-500">
            <IconArrowLeft style={{ width: rem(12), height: rem(16) }} stroke={1.5} />
            <Box ml={5} >Back to the login page</Box>
          </Center>
        </Anchor>
        <Button color="teal">Request for Reset</Button>
      </Group>
    </Paper>
  );
}