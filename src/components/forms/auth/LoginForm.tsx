import { siteConfig } from '@/config/site';
import { useLogin } from '@/hooks/useLogin';
import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Navigation } from 'react-router-dom';

interface LoginDetails {
  email: string;
  password: string;
}

export function LoginForm() {
  const form = useForm<LoginDetails>({
    initialValues: {
      email: '',
      password: '',
    },
  })

  const { login, isLoading } = useLogin();

  async function handleLogin(loginDetails: LoginDetails) {
    const { email, password } = loginDetails;
    await login(email, password);
  }

  return (
    <form onSubmit={form.onSubmit((loginDetails) => handleLogin(loginDetails))}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          required
          label="Email"
          placeholder="Your email..."
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password..."
          required mt="md"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
        <Button disabled={isLoading} color="teal" fullWidth mt="xl" type="submit">
          Login
        </Button>
        <Group justify="center" mt="lg">
          <Anchor href={siteConfig.pages.ForgotPassword} size="sm" className="text-green-500">
            Forgot password?
          </Anchor>
        </Group>
      </Paper>
    </form>
  );
}
