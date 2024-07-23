import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { Navbar } from './components/layout/Navbar';
import "./globals.css"

export default function App() {
  return (
    <MantineProvider forceColorScheme='dark'>
      <Navbar />
      <Router />
    </MantineProvider>
  );
}
