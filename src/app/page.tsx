import type {
  ISbStoriesParams,
  StoryblokClient,
} from '@storyblok/react/rsc';
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import ConfigHeader from "../components/sections/ConfigHeader";
import ConfigFooter from "../components/sections/ConfigFooter";
import { draftMode } from 'next/headers'

export default async function Home() {
  // @ts-ignore
  const { story, header, footer, process, env } = await fetchData();

  return (
    <div>
      <div>{process}</div>
      {env}
      <ConfigHeader blok={header.content} />
      <StoryblokStory story={story} />
      <ConfigFooter blok={footer.content} />
    </div>
  );
}


const isDev = process.env.NODE_ENV === 'development'
export const revalidate = isDev ? 0 : 3600
console.log("isDev", isDev, process.env)

async function fetchData() {
  
  const { isEnabled: isDraft } = draftMode()
  const sbParams: ISbStoriesParams = {
    resolve_links: "url",
    
     version: isDev || isDraft ? 'draft' : 'published',
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
    
    return { story: data.story, header: header.data.story, footer: footer.data.story, process: process.env, env: isDev || isDraft ? 'draft' : 'published' };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
