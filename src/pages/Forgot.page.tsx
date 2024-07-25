import { ForgotPasswordForm } from "@/components/forms/auth/ForgotPasswordForm";
import { Container, Text, Title } from "@mantine/core";

export function ForgotPasswordPage() {
  return (
    <Container size={460} my={30}>
      <Title ta="center" className="mb-4">
        Forgot your password?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Enter your email to get a reset link
      </Text>
      <ForgotPasswordForm />

    </Container>
  )
}