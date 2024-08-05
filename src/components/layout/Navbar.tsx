import { Menu, Group, Center, Burger, Container, Anchor, Title, Button, Avatar, Tooltip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { navLinks, siteConfig } from '@/config/site';
import classes from './Navbar.module.scss';
import { useAuth } from '@/hooks/auth/useAuth';
import { useLogout } from '@/hooks/auth/useLogout';
import { AccountMenu } from '../menus/AccountMenu';

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  const { user } = useAuth()
  const { logout, isLoading } = useLogout()

  const items = navLinks.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Anchor key={item.link} href={item.link} className="hover:no-underline"><Menu.Item key={item.link}>{item.label}</Menu.Item></Anchor>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Anchor
              href={link.link}
              className={`${classes.link} no-underline`}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Anchor>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Anchor
        key={link.label}
        href={link.link}
        className={`${classes.link} no-underline`}
      >
        {link.label}
      </Anchor>
    );
  });

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Anchor href="/" className="text-zinc-300 hover:no-underline">
          <Title className="text-lg font-bold hover:text-zinc-400">{siteConfig.appName}</Title>
        </Anchor>
        <Group gap={5} visibleFrom="sm">
          {user && items}
        </Group>
        <Group gap={8} visibleFrom="sm">
          {user && (
            <>
              < Button
                onClick={async () => await logout()}
                disabled={isLoading}
                variant="default"
                color="gray"
              >
                Logout
              </Button>
              <AccountMenu />
            </>
          )}
          {!user && (
            <>
              < Anchor href={siteConfig.pages.Login}>
                <Button variant="default" color="gray">
                  Login
                </Button>
              </Anchor>
              <Anchor href={siteConfig.pages.SignUp}>
                <Button color="teal">Sign Up</Button>
              </Anchor>
            </>
          )}
        </Group>
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
      </Container>
    </header >
  );
}
