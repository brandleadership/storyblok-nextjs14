import type { Metadata } from 'next';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import StoryblokProvider from '../components/StoryblokProvider';
import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'Next.js Template project',
        template: '%s - change with name of the home page',
    },
    description: 'Reusable template for Storyblok projects',
};

storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <StoryblokProvider>
            <html lang="en">
                <body>{children}</body>
            </html>
        </StoryblokProvider>
    );
}
