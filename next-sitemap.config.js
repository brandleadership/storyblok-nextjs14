// import {
//     getStoryblokApi,
//     storyblokInit,
//     apiPlugin,
// } from '@storyblok/react/rsc';

// storyblokInit({
//     accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
//     use: [apiPlugin],
// });

// const config = {
//     siteUrl:
//         'https://vercel.com/template-storyblok-next/template-storyblok-nextjs14',
//     generateRobotsTxt: true,
//     sitemapSize: 5000,
//     outDir: './public',
//     exclude: ['/404', '/private', '/test', '/config'],
//     additionalPaths: async (config) => {
//         const response = await fetch(
//             `https://api.storyblok.com/v2/cdn/stories?token=${process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN}`
//         );
//         const data = await response.json();
//         const paths = data.stories.map((story) => ({
//             loc: `/${story.full_slug}`,
//             lastmod: story.published_at,
//         }));
//     },
// };

// export default config;
