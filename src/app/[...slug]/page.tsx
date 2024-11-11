import type {
    ISbStoriesParams,
    ISbStoryData,
    StoryblokClient,
} from '@storyblok/react/rsc';
import { headers } from 'next/headers';
import { getStoryblokApi, apiPlugin, storyblokInit } from '@storyblok/react';
import StoryblokStory from '@storyblok/react/story';
import ConfigHeader from '../../components/sections/ConfigHeader';
import ConfigFooter from '../../components/sections/ConfigFooter';
import { ConfigFooterProps } from '../../types/types';
import { ConfigHeaderProps } from '../../types/types';

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

// The main Page component (this is the only thing exported)
export default async function Page({ params }: StoryblokPageProps) {
    const slug = Array.isArray(params?.slug) ? params.slug.join('/') : 'home';
    const fetchedData = await fetchData(slug);

    if (!fetchedData) {
        return <div>Story not found</div>;
    }

    const { story, header, footer } = fetchedData;

    return (
        <div>
            <ConfigHeader blok={header.content as ConfigHeaderProps['blok']} />
            <StoryblokStory story={story} />
            <ConfigFooter
                blok={footer.content as ConfigFooterProps['blok']}
            />{' '}
            {/* Explicit type casting */}
        </div>
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
