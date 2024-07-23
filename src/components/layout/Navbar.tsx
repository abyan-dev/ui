import { Menu, Group, Center, Burger, Container, Anchor, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './Navbar.module.scss';
import { Button } from '@mantine/core';
import { navLinks, siteConfig } from '@/config/site';

export function Navbar() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = navLinks.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <Anchor
                            href={link.link}
                            className={classes.link}
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
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        );
    });

    return (
        <header className={classes.header}>
            <Container className={classes.inner}>
                <Title className="text-lg font-bold">abyan.dev</Title>
                <Group gap={5} visibleFrom="sm">
                    {items}
                </Group>
                <Group gap={8} visibleFrom='sm'>
                    <Anchor href={siteConfig.pages.Login}>
                        <Button variant="default" color="gray">
                            Login
                        </Button>
                    </Anchor>
                    <Anchor href={siteConfig.pages.SignUp}>
                        <Button color="teal">
                            Sign Up
                        </Button>
                    </Anchor>
                </Group>
                <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
            </Container>
        </header>
    );
}