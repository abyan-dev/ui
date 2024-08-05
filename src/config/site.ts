import { getLabelsLockup } from "@mantine/core";
import { IconBook, IconClock, IconCode, IconCodeAsterisk, IconCodeCircle } from "@tabler/icons-react";

export const siteConfig = {
  appName: 'abyan.dev',
  creator: 'Abyan Majid',
  creatorSite: 'https://github.com/abyanmajid',
  source: 'https://github.com/abyan-dev',
  pages: {
    // Home
    Home: '/',

    // Dashboard
    Dashboard: "/dashboard",

    // Terms of service
    Terms: "/terms",

    // Authentication
    Login: '/auth/login',
    SignUp: '/auth/signup',
    ForgotPassword: '/auth/forgot',
    Verify: '/auth/verify',

    // Productivity
    Tasks: '/productivity/tasks',
    Pomodoro: '/productivity/pomodoro',

    // Learning
    LearnProgramming: '/learn/programming',
  },
};

export const navLinks = [
  { link: siteConfig.pages.Dashboard, label: "Dashboard" },
  {
    link: '#',
    label: 'Learn',
    links: [
      { link: siteConfig.pages.LearnProgramming, label: 'Learn Programming' },
    ],
  },
  {
    link: '#',
    label: 'Productivity',
    links: [
      { link: siteConfig.pages.Tasks, label: 'My Tasks' },
      { link: siteConfig.pages.Pomodoro, label: "Pomodoro" }
    ],
  },
];

export const appServices = {
  productivity: [
    {
      label: "My Tasks",
      icon: IconBook,
      link: siteConfig.pages.Tasks
    },
    {
      label: "Pomodoro",
      icon: IconClock,
      link: siteConfig.pages.Pomodoro
    }
  ],
  learn: [
    {
      label: "Programming",
      icon: IconCode,
      link: siteConfig.pages.LearnProgramming
    }
  ]
}