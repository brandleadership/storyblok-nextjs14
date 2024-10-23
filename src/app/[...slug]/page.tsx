import type {
  ISbStoriesParams,
  StoryblokClient,
} from '@storyblok/react/rsc';
import { getStoryblokApi, apiPlugin, storyblokInit } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";
import ConfigHeader from "../../components/sections/ConfigHeader";
import ConfigFooter from "../../components/sections/ConfigFooter";
import { draftMode } from 'next/headers'

// Initialize Storyblok
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

const isDev = process.env.NODE_ENV === 'development'
export const revalidate = isDev ? 0 : 3600

// Data fetching helper function (not exported)
async function fetchData(slug: string) {
  const { isEnabled: isDraft } = draftMode()
  const sbParams: ISbStoriesParams = {resolve_links: "url",
     version: isDev || isDraft ? 'draft' : 'published',
    resolve_relations: [
            'global_reference.reference']}

  const storyblokApi = getStoryblokApi();
  try {
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
     const header = await storyblokApi.get(
            'cdn/stories/global/header',
            sbParams
    );
    const footer = await storyblokApi.get(
            'cdn/stories/global/footer',
            sbParams
    );
    
    return { story: data.story, header: header.data.story, footer: footer.data.story };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// The main Page component (this is the only thing exported)
export default async function Page({ params } : any) {
  const slug = Array.isArray(params?.slug) ? params.slug.join("/") : "home";
   // @ts-ignore
  const { story, header, footer } = await fetchData(slug);

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <div>
      <ConfigHeader blok={header.content} />
      <StoryblokStory story={story} />
      <ConfigFooter blok={footer.content} />
    </div>
  );
}

// Generate static paths for pre-rendering
export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  const sbParams: ISbStoriesParams = {resolve_links: "url",
      version: "draft",
    resolve_relations: [
            'global_reference.reference']}
  const { data } = await storyblokApi.get("cdn/links/", sbParams);

  const paths = Object.keys(data.links)
    .filter((linkKey) => !data.links[linkKey].is_folder && data.links[linkKey].slug !== "home")
    .map((linkKey) => {
      const slug = data.links[linkKey].slug.split("/");
      return { slug };
    });

  return paths;
}









