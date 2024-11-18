import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import { ReactNode } from 'react';
/** Import your components */
import Page from './sections/Page';
import Global from './sections/Global';
import ConfigHeader from './sections/ConfigHeader';
import ConfigFooter from './sections/ConfigFooter';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import RichtextExample from './sections/RichtextExample';

interface StoryblokProviderProps {
    children: ReactNode;
}

const components = {
    page: Page,
    global: Global,
    ConfigHeader: ConfigHeader,
    ConfigFooter: ConfigFooter,
    header: Header,
    footer: Footer,
    hero: Hero,
    richtext_example: RichtextExample,
};

/** 2. Initialize it as usual */
storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
    components,
});

export default function StoryblokProvider({
    children,
}: StoryblokProviderProps) {
    return children;
}
