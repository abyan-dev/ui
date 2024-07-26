import { useAuth } from '@/hooks/useAuth';
import { useLogout } from '@/hooks/useLogout';
import { Menu, Button, Text, rem, Avatar } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconLogout,
} from '@tabler/icons-react';

export function AccountMenu() {
  const { user } = useAuth();
  const { logout } = useLogout();
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar key={user.name} name={user.name} color="teal" className="cursor-pointer hover:bg-zinc-700" />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>My Account</Menu.Label>
        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
          Settings
        </Menu.Item>
        <Menu.Item onClick={async () => await logout()} color="red" leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}