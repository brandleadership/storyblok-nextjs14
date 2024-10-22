import type {
  ISbStoriesParams,
  StoryblokClient,
} from '@storyblok/react/rsc';
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import ConfigHeader from "../components/sections/ConfigHeader";
import ConfigFooter from "../components/sections/ConfigFooter";

export default async function Home() {
  // @ts-ignore
  const { story, header, footer } = await fetchData();

  return (
    <div>
      <ConfigHeader blok={header.content} />
      <StoryblokStory story={story} />
      <ConfigFooter blok={footer.content} />
    </div>
  );
}
async function fetchData() {
  const sbParams: ISbStoriesParams = {resolve_links: "url",
      version: "published",
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
    
    return { story: data.story, header: header.data.story, footer: footer.data.story };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
