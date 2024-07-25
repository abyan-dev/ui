import { siteConfig } from '@/config/site';
import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Group, Button } from '@mantine/core';

export function LoginForm() {
  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <TextInput label="Email" placeholder="you@mantine.dev" required />
      <PasswordInput label="Password" placeholder="Your password" required mt="md" />
      <Button color="teal" fullWidth mt="xl">
        Log in
      </Button>
      <Group justify="center" mt="lg">
        <Anchor href={siteConfig.pages.ForgotPassword} size="sm" className="text-green-500">
          Forgot password?
        </Anchor>
      </Group>
    </Paper>
  );
}
