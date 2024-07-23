export const siteConfig = {
    appName: "abyan.dev",
    creator: "Abyan Majid",
    creatorSite: "https://github.com/abyanmajid",
    source: "https://github.com/abyan-dev",
    pages: {
        Home: "/",
        Login: "/auth/login",
        SignUp: "/auth/signup",
        ForgotPassword: "/auth/forgot",
        VerifyEmail: "/auth/verify",
    },
}

export const navLinks = [
    {
        link: '#1',
        label: 'Productivity',
        links: [
            { link: '/docs', label: 'Documentation' },
            { link: '/resources', label: 'Resources' },
            { link: '/community', label: 'Community' },
            { link: '/blog', label: 'Blog' },
        ],
    },
    { link: '#', label: 'Learn' },
];