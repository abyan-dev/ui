import { Container, Text, Button, Group } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';
import classes from './Hero.module.scss';
import { useAuth } from '@/hooks/useAuth';

export function Hero() {
  const { user } = useAuth()
  return (
    <div className={classes.wrapper}>
      <Container size={800} className={classes.inner}>
        <h1 className={classes.title}>
          A collection of my{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'cyan', to: 'teal' }} inherit>
            supremely majestic
          </Text>{' '}
          microservices.
        </h1>

        <Text className={classes.description}>
          A multi-purpose distributed app offering services such as tools for productivity, collaboration, as well as a platform for learning to code.
        </Text>

        <Group className={classes.controls}>
          <Button
            component="a"
            href={user ? "/dashboard" : "/auth/login"}
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'cyan', to: 'teal' }}
          >
            {user ? "My Dashboard" : "Get Started"}
          </Button>

          <Button
            component="a"
            href="https://github.com/abyan-dev"
            target="_blank"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<GithubIcon size={20} />}
          >
            Source
          </Button>
        </Group>
      </Container>
    </div>
  );
}