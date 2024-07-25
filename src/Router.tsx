import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { SignUpPage } from './pages/SignUp.page';
import { VerifyPage } from "./pages/Verify.page";
import { LoginPage } from './pages/Login.page';
import { ForgotPasswordPage } from './pages/Forgot.page';
import { NotFound } from './components/errors/not-found/NotFound';
import { siteConfig } from './config/site';
import { DashboardPage } from './pages/Dashboard.page';

const router = createBrowserRouter([
  {
    path: siteConfig.pages.Home,
    element: <HomePage />,
  },
  {
    path: siteConfig.pages.Dashboard,
    element: <DashboardPage />,
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
    path: siteConfig.pages.Verify,
    element: <VerifyPage />,
  },
  {
    path: siteConfig.pages.ForgotPassword,
    element: <ForgotPasswordPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
