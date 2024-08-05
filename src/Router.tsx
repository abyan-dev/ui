import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/common/Home.page';
import { SignUpPage } from './pages/auth/SignUp.page';
import { VerifyPage } from "./pages/auth/Verify.page";
import { LoginPage } from './pages/auth/Login.page';
import { ForgotPasswordPage } from './pages/auth/Forgot.page';
import { NotFoundPage } from './pages/common/NotFound.page';
import { siteConfig } from './config/site';
import { DashboardPage } from './pages/common/Dashboard.page';
import { Navbar } from './components/layout/Navbar';
import { TasksPage } from './pages/productivity/Tasks.page';

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
        <Route path={siteConfig.pages.Tasks} element={<TasksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
