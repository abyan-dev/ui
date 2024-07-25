import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { MantineProvider } from '@mantine/core';
import { AuthProvider } from './contexts/AuthContext';
import { Router } from './Router';
import { Navbar } from './components/layout/Navbar';
import './globals.css';
import { Notifications } from '@mantine/notifications';

export default function App() {
  return (
    <AuthProvider>
      <MantineProvider forceColorScheme="dark">
        <Notifications />
        <Navbar />
        <Router />
      </MantineProvider>
    </AuthProvider>
  );
}
