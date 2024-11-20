import { apiPlugin, getStoryblokApi, storyblokInit } from '@storyblok/react';
import type {
    ISbStoriesParams,
    ISbStoryData,
    StoryblokClient,
} from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';
import { headers } from 'next/headers';
import ConfigFooter from '../../components/sections/ConfigFooter';
import ConfigHeader from '../../components/sections/ConfigHeader';
import { ConfigFooterProps, ConfigHeaderProps } from '../../types/types';

type StoryblokPageProps = {
    params: { slug?: string[] };
};

type StoryblokContent = {
    story: ISbStoryData;
    header: ISbStoryData;
    footer: ISbStoryData;
};

// Initialize Storyblok
storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
});

const isDev = process.env.NODE_ENV === 'development';
export const revalidate = isDev ? 0 : 3600;

const getVersion = (): 'published' | 'draft' => {
    const heads = headers();
    const pathname = heads.get('x-search-paramethers-url') || '';
    if (pathname.includes('_storyblok_published')) {
        return 'published';
    } else if (pathname.includes('_storyblok')) {
        return 'draft';
    } else {
        return 'published';
    }
};

// Data fetching helper function (not exported)
async function fetchData(slug: string): Promise<StoryblokContent | null> {
    const sbParams: ISbStoriesParams = {
        resolve_links: 'url',
        version: getVersion(),
        resolve_relations: ['global_reference.reference'],
    };

    const storyblokApi: StoryblokClient = getStoryblokApi();
    try {
        const { data } = await storyblokApi.get(
            `cdn/stories/${slug}`,
            sbParams
        );
        const header = await storyblokApi.get(
            'cdn/stories/global/header',
            sbParams
        );
        const footer = await storyblokApi.get(
            'cdn/stories/global/footer',
            sbParams
        );

        return {
            story: data.story as ISbStoryData,
            header: header.data.story as ISbStoryData,
            footer: footer.data.story as ISbStoryData,
        };
    } catch (error) {
        console.log('error: ', error);
        return null;
    }
}

// Dynamic Metadata
export async function generateMetadata({ params }: StoryblokPageProps) {
    const slug = Array.isArray(params?.slug) ? params.slug.join('/') : 'home';

    const data = await fetchData(slug);

    if (!data || !data.story) {
        return {};
    }

    const { story } = data;

    const metatags = story.content.metatags || {};
    const seoMeta = {
        title: metatags.title || 'Default Title',
        description: metatags.description || 'Default Description',
        ogTitle: metatags.og_title || 'Default OG Title',
        ogDescription: metatags.og_description || 'Default OG Description',
        ogImage: metatags?.og_image || '',
        twitterTitle: metatags.twitter_title || 'Default Twitter Title',
        twitterDescription:
            metatags.twitter_description || 'Default Twitter Description',
        twitterImage: metatags?.twitter_image || '',
    };

    return {
        metadataBase: new URL(`${process.env.SITE_URL}`),
        title: seoMeta.title,
        description: seoMeta.description,
        openGraph: {
            title: seoMeta.ogTitle,
            description: seoMeta.ogDescription,
            image: seoMeta?.ogImage,
        },
        twitter: {
            card: 'summary',
            title: seoMeta.twitterTitle,
            description: seoMeta.twitterDescription,
            image: seoMeta?.twitterImage,
        },
    };
}

// The main Page component (this is the only thing exported)
export default async function Page({ params }: StoryblokPageProps) {
    const slug = Array.isArray(params?.slug) ? params.slug.join('/') : 'home';
    const fetchedData = await fetchData(slug);

    if (!fetchedData) {
        return <div>Story not found</div>;
    }

    const { story, header, footer } = fetchedData;

    return (
        <>
            <ConfigHeader blok={header.content as ConfigHeaderProps['blok']} />
            <StoryblokStory story={story} />
            <ConfigFooter blok={footer.content as ConfigFooterProps['blok']} />
        </>
    );
}

// Generate static paths for pre-rendering
export async function generateStaticParams() {
    const storyblokApi = getStoryblokApi();
    const sbParams: ISbStoriesParams = {
        resolve_links: 'url',
        version: 'published',
        resolve_relations: ['global_reference.reference'],
    };
    const { data } = await storyblokApi.get('cdn/links/', sbParams);

    const paths = Object.keys(data.links)
        .filter(
            (linkKey) =>
                !data.links[linkKey].is_folder &&
                data.links[linkKey].slug !== 'home'
        )
        .map((linkKey) => {
            const slug = data.links[linkKey].slug.split('/');
            return { slug };
        });

    return paths;
}
