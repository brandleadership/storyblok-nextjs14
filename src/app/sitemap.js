// import {
//     getStoryblokApi,
//     storyblokInit,
//     apiPlugin,
// } from '@storyblok/react/rsc';

// storyblokInit({
//     accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
//     use: [apiPlugin],
// });

// let per_page = 100;
// let currentPage = 1;
// let links = {};

// export default async function sitemap() {
//     try {
//         const storyblokApi = getStoryblokApi();

//         if (!storyblokApi) {
//             throw new Error('Storyblok API is not initialized');
//         }

//         const response = await storyblokApi.get('cdn/links/', {
//             version: 'published',
//             per_page: per_page,
//             page: currentPage,
//             paginated: 1,
//         });

//         if (!response || !response.data || !response.data.links) {
//             throw new Error('Invalid response structure');
//         }

//         const data = response.data;
//         links = data.links;

//         const BaseUrl =
//             'https://vercel.com/template-storyblok-next/template-storyblok-nextjs14';
//         const paths = [];

//         // Define an array of keywords to exclude
//          const excludedKeywords = ['test', 'config'];

//         Object.keys(links).forEach((uuid) => {
//             const link = links[uuid];
//             const real_path = link.real_path;

//             // Exclude folders and links with excluded keywords in their slug or path
//             if (link.is_folder) return;
//             if (
//                 excludedKeywords.some(
//                     (keyword) =>
//                         link.slug.includes(keyword) ||
//                         real_path.includes(keyword)
//                 )
//             ) {
//                 return; // Skip this link if it matches the exclusion criteria
//             }

//             langToFilter.forEach((lang) => {
//                 let translated_item = null;

//                 if (link.alternates && Array.isArray(link.alternates)) {
//                     translated_item = link.alternates.find(
//                         (item) => item.lang === lang
//                     );
//                 }

//                 let url = '';
//                 if (translated_item && translated_item.translated_slug) {
//                     url = `${BaseUrl}${lang}/${translated_item.translated_slug}`;
//                 } else if (link.real_path) {
//                     url = `${BaseUrl}${lang}${link.real_path}`;
//                 } else {
//                     console.error('Missing path information for link:', link);
//                     return;
//                 }

//                 paths.push({
//                     url: url,
//                     alternates: {
//                         languages: {
//                             en: `${BaseUrl}en${real_path}`,
//                             de: `${BaseUrl}de${real_path}`,
//                         },
//                     },
//                 });
//             });
//         });

//         return paths;
//     } catch (error) {
//         console.error('Error fetching data from Storyblok API:', error);
//         return [];
//     }
// }

import {
    getStoryblokApi,
    storyblokInit,
    apiPlugin,
} from '@storyblok/react/rsc';

storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
});

let per_page = 100;
let currentPage = 1;
let links = {};

export default async function sitemap() {
    try {
        const storyblokApi = getStoryblokApi();

        if (!storyblokApi) {
            throw new Error('Storyblok API is not initialized');
        }

        const response = await storyblokApi.get('cdn/links/', {
            version: 'published',
            per_page: per_page,
            page: currentPage,
            paginated: 1,
        });

        if (!response || !response.data || !response.data.links) {
            throw new Error('Invalid response structure');
        }

        const data = response.data;
        links = data.links;

        const BaseUrl =
            'https://vercel.com/template-storyblok-next/template-storyblok-nextjs14';
        const paths = [];

        // Define an array of keywords to exclude
        const excludedKeywords = ['test', 'config'];

        Object.keys(links).forEach((uuid) => {
            const link = links[uuid];
            const real_path = link.real_path;

            // Exclude folders and links with excluded keywords in their slug or path
            if (link.is_folder) return;
            if (
                excludedKeywords.some(
                    (keyword) =>
                        link.slug.includes(keyword) ||
                        real_path.includes(keyword)
                )
            ) {
                return; // Skip this link if it matches the exclusion criteria
            }

            let url = '';
            if (link.real_path) {
                url = `${BaseUrl}${link.real_path}`;
            } else {
                console.error('Missing path information for link:', link);
                return;
            }

            paths.push({ url });
        });

        return paths;
    } catch (error) {
        console.error('Error fetching data from Storyblok API:', error);
        return [];
    }
}
