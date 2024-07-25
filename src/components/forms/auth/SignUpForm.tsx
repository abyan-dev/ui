import { TextInput, PasswordInput, Checkbox, Paper, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useSignup } from '@/hooks/useSignup';

interface UserDetails {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export function SignUpForm() {
  const form = useForm<UserDetails>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  });
  const { signup, isLoading } = useSignup();

  async function register(userDetails: UserDetails) {
    const { name, email, password, confirmPassword } = userDetails;
    const response = await signup(name, email, password, confirmPassword)
  }
  return (
    <form onSubmit={form.onSubmit((userDetails) => register(userDetails))}>
      <Paper withBorder shadow="md" p={30} my={30} radius="md">
        <TextInput
          required
          label="Display Name"
          description="Between 3 to 30 characters in length"
          placeholder="Your display name..."
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <TextInput
          required mt="md"
          label="Email"
          placeholder="Your email..."
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          description="A minimum of 8 characters, contains a number, uppercase letter, and a special character."
          placeholder="Your password..."
          required mt="md"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Your password..."
          required mt="md"
          key={form.key("confirmPassword")}
          {...form.getInputProps("confirmPassword")}
        />
        <Group justify="space-between" mt="lg">
          <Checkbox
            color="teal"
            required
            label={<span>I agree with the <a className="text-green-500 hover:underline" href="/terms">terms of service.</a></span>}
            key={form.key("terms")}
            {...form.getInputProps("terms", { type: "checkbox" })}
          />
        </Group>
        <Button disabled={isLoading} color="teal" fullWidth mt="xl" type="submit">
          Sign Up
        </Button>
      </Paper>
    </form>
  );
}