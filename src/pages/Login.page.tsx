import { Container, Title, Text, Anchor } from '@mantine/core';
import { LoginForm } from '@/components/forms/login/LoginForm';

export function LoginPage() {
  return (
    <Container size={420}>
      <Title ta="center">Welcome back!</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor href="/auth/" size="sm" className="text-green-500">
          Create account
        </Anchor>
      </Text>
      <LoginForm />
    </Container>
  );
}
