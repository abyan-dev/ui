import { Container, Title, Text, Anchor } from '@mantine/core';
import { SignUpForm } from '@/components/forms/auth/SignUpForm';
import { siteConfig } from '@/config/site';

export function SignUpPage() {
  return (
    <Container size={420}>
      <Title ta="center">Welcome!</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{' '}
        <Anchor href={siteConfig.pages.Login} size="sm" className="text-green-500">
          Login
        </Anchor>
      </Text>
      <SignUpForm />
    </Container>
  );
}

