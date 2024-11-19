import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import plugin from 'tailwindcss/plugin';

const config: Config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // If colors are in extend, they can be used on top of Tailwind colors
            // To overwrite Tailwind default colors, move them to theme
            colors: {
                primary: {
                    50: '#EBF5FF',
                    100: '#E1EFFE',
                    200: '#C3DDFD',
                    300: '#A4CAFE',
                    400: '#76A9FA',
                    500: '#3F83F8',
                    600: '#1C64F2',
                    700: '#1A56DB',
                    800: '#1E429F',
                    900: '#233876',
                },
                secondary: {
                    50: '#EDFAFA',
                    100: '#D5F5F6',
                    200: '#AFECEF',
                    300: '#7EDCE2',
                    400: '#16BDCA',
                    500: '#0694A2',
                    600: '#047481',
                    700: '#036672',
                    800: '#05505C',
                    900: '#014451',
                },
            },
        },
    },
    plugins: [
        forms,
        plugin(function ({ addComponents, theme }) {
            addComponents({
                // Example Configuration for custom Elements
                // These can be used like any other Tailwind class
                '.btn': {
                    padding: '.5rem 1rem',
                    borderRadius: '.25rem',
                },
                '.btn-primary': {
                    backgroundColor: theme('colors.primary.900'),
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: theme('colors.primary.700'),
                    },
                },
                '.btn-secondary': {
                    backgroundColor: theme('colors.secondary.900'),
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: theme('colors.secondary.700'),
                    },
                },
                '.img-contain': {
                    height: '100%',
                    width: '100%',
                    objectFit: 'contain',
                },
                '.img-cover': {
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                },
            });
        }),
        plugin(function ({ addBase }) {
            addBase({
                // Opinionated Configuration targeting HTML Tags
                body: {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    overflowX: 'hidden',
                },
            });
        }),
    ],
};
export default config;
