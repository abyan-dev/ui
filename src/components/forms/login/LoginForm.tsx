import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Group, Button } from '@mantine/core';

export function LoginForm() {
  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <TextInput label="Email" placeholder="you@mantine.dev" required />
      <PasswordInput label="Password" placeholder="Your password" required mt="md" />
      <Group justify="space-between" mt="lg">
        <Checkbox label="Remember me" />
        <Anchor href="/auth/forgot" size="sm" className="text-green-500">
          Forgot password?
        </Anchor>
      </Group>
      <Button color="teal" fullWidth mt="xl">
        Sign in
      </Button>
    </Paper>
  );
}
