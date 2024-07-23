import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { SignUpPage } from './pages/SignUp.page';
import { LoginPage } from './pages/Login.page';
import { NotFound } from './components/errors/not-found/NotFound';
import { siteConfig } from './config/site';

const router = createBrowserRouter([
  {
    path: siteConfig.pages.Home,
    element: <HomePage />,
  },
  {
    path: siteConfig.pages.Login,
    element: <LoginPage />,
  },
  {
    path: siteConfig.pages.SignUp,
    element: <SignUpPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
