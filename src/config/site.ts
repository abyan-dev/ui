export const siteConfig = {
  appName: 'abyan.dev',
  creator: 'Abyan Majid',
  creatorSite: 'https://github.com/abyanmajid',
  source: 'https://github.com/abyan-dev',
  pages: {
    Home: '/',
    Dashboard: "/dashboard",
    Login: '/auth/login',
    SignUp: '/auth/signup',
    ForgotPassword: '/auth/forgot',
    Verify: '/auth/verify',
  },
};

export const navLinks = [
  {
    link: '#',
    label: 'Productivity',
    links: [
      { link: '/productivity/tasks', label: 'My Tasks' },
    ],
  },
  { link: '#', label: 'Learn' },
];
