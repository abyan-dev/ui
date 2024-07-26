export const siteConfig = {
  appName: 'abyan.dev',
  creator: 'Abyan Majid',
  creatorSite: 'https://github.com/abyanmajid',
  source: 'https://github.com/abyan-dev',
  pages: {
    Home: '/',
    Dashboard: "/dashboard",
    Documentation: "/docs",
    Terms: "/terms",
    Login: '/auth/login',
    SignUp: '/auth/signup',
    ForgotPassword: '/auth/forgot',
    Verify: '/auth/verify',
    Productivity: '/productivity',
    Tasks: '/productivity/tasks',
  },
};

export const navLinks = [
  { link: siteConfig.pages.Dashboard, label: "Dashboard" },
  {
    link: '#',
    label: 'Productivity',
    links: [
      { link: siteConfig.pages.Tasks, label: 'My Tasks' },
    ],
  },
  { link: siteConfig.pages.Documentation, label: "Docs" }
];
