import type {
  ISbStoriesParams,
  StoryblokClient,
} from '@storyblok/react/rsc';
import { getStoryblokApi, apiPlugin, storyblokInit } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

// Initialize Storyblok
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

// Data fetching helper function (not exported)
async function fetchData(slug: any) {
  const sbParams: ISbStoriesParams = {resolve_links: "url",
      version: "draft",
    resolve_relations: [
            'global_reference.reference']}

  const storyblokApi = getStoryblokApi();
  try {
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    const header = await storyblokApi.get(
            'cdn/stories/global/header',
            sbParams
        );
    return { story: data.story, header: header.data.story };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// The main Page component (this is the only thing exported)
export default async function Page({ params } : any) {
  const slug = Array.isArray(params?.slug) ? params.slug.join("/") : "home";
  const story = await fetchData(slug);

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <div>
      <StoryblokStory story={story} />
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









