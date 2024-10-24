import type {
  ISbStoriesParams,
  StoryblokClient,
} from '@storyblok/react/rsc';
import { usePathname } from 'next/navigation';
import { headers } from 'next/headers';
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import ConfigHeader from "../components/sections/ConfigHeader";
import ConfigFooter from "../components/sections/ConfigFooter";
import { draftMode } from 'next/headers'

export default async function Home() {
  // @ts-ignore
  const { story, header, footer, env } = await fetchData();

  return (
    <div>
      {JSON.stringify(env)}
      <ConfigHeader blok={header.content} />
      <StoryblokStory story={story} />
      <ConfigFooter blok={footer.content} />
    </div>
  );
}


const getVersion = () => {
const heads = headers()

 const pathname = heads.get("x-search-paramethers-url") || "";
  if (pathname.includes("_storyblok_published")) {
    return 'published'
  } else if (pathname.includes("_storyblok")) {
    return 'draft'
  } else {
    return 'published'
  }
}
const isDev = process.env.NODE_ENV === 'development'
export const revalidate = isDev ? 0 : 3600

async function fetchData() {
  const sbParams: ISbStoriesParams = {
    resolve_links: "url",
    
     version: getVersion(),
    resolve_relations: [
            'global_reference.reference']}

  const storyblokApi = getStoryblokApi();
  try {
    const { data } = await storyblokApi.get(`cdn/stories/home`, sbParams);
    const header = await storyblokApi.get(
            'cdn/stories/global/header',
            sbParams
    );
    const footer = await storyblokApi.get(
            'cdn/stories/global/footer',
            sbParams
    );
    
    return { story: data.story, header: header.data.story, footer: footer.data.story, env: headers().get("x-search-paramethers-url") };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
