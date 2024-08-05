import { useAuth } from '@/hooks/auth/useAuth';
import { useLogout } from '@/hooks/auth/useLogout';
import { Menu, rem, Avatar } from '@mantine/core';
import {
  IconSettings,
  IconLogout,
  IconDashboard,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export function AccountMenu() {
  const { user } = useAuth();
  const { logout } = useLogout();
  const navigate = useNavigate();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar
          key={user.name}
          name={user.name}
          color={user.role === "admin" ? "red" : "teal"}
          className="cursor-pointer hover:bg-zinc-700"
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>My Account</Menu.Label>
        <Menu.Item onClick={() => navigate("/dashboard")} leftSection={<IconDashboard style={{ width: rem(14), height: rem(14) }} />}>
          Dashboard
        </Menu.Item>
        <Menu.Item onClick={() => navigate("/settings")} leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
          Settings
        </Menu.Item>
        <Menu.Item onClick={async () => await logout()} color="red" leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}