'use client';

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import { ReactNode } from 'react';
/** Import your components */
import AllArticles from './sections/Articles/AllArticles';
import Article from './sections/Articles/Article';
import PopularArtices from './sections/Articles/PopularArticles';
import ConfigFooter from './sections/Footer/ConfigFooter';
import Footer from './sections/Footer/Footer';
import Global from './page-wrappers/Global';
import ConfigHeader from './sections/Header/ConfigHeader';
import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import Page from './page-wrappers/Page';

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
    article: Article,
    'all-articles': AllArticles,
    'popular-articles': PopularArtices,
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
