import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';

/** @type {import('next-sitemap').IConfig} */

storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
});

const config = {
    siteUrl:
        process.env.SITE_URL ||
        'https://template-storyblok-nextjs14-git-cba320-template-storyblok-next.vercel.app/',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    outDir: './public',
    exclude: [
        '/404',
        '/private',
        '/test',
        '/config',
        '/global/header',
        '/global/footer',
    ],

    additionalPaths: async (config) => {
        const response = await fetch(
            `https://api.storyblok.com/v2/cdn/stories?token=${process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN}`
        );

        if (!response.ok) {
            console.error('Failed to fetch stories:', response.statusText);
            return [];
        }

        const data = await response.json();

        const paths = data.stories
            .map((story) => ({
                loc: `/${story.full_slug}`,
                lastmod: story.published_at,
            }))
            .filter((path) => !config.exclude.includes(path.loc));

        console.log('Generated paths:', paths);
        return paths;
    },

    transform: async (config, path) => {
        return {
            loc: path,
            changefreq: 'daily',
            priority: 0.7,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        };
    },
};

export default config;
