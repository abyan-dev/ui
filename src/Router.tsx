import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { SignUpPage } from './pages/SignUp.page';
import { VerifyPage } from "./pages/Verify.page";
import { LoginPage } from './pages/Login.page';
import { ForgotPasswordPage } from './pages/Forgot.page';
import { NotFound } from './components/errors/not-found/NotFound';
import { siteConfig } from './config/site';
import { DashboardPage } from './pages/Dashboard.page';
import { Navbar } from './components/layout/Navbar';

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={siteConfig.pages.Home} element={<HomePage />} />
        <Route path={siteConfig.pages.Dashboard} element={<DashboardPage />} />
        <Route path={siteConfig.pages.Login} element={<LoginPage />} />
        <Route path={siteConfig.pages.SignUp} element={<SignUpPage />} />
        <Route path={siteConfig.pages.Verify} element={<VerifyPage />} />
        <Route path={siteConfig.pages.ForgotPassword} element={<ForgotPasswordPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
