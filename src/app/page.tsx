import type {
  ISbStoriesParams,
  StoryblokClient,
} from '@storyblok/react/rsc';
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import Header from "../components/sections/Header";

export default async function Home() {
  // @ts-ignore
  const { story, header } = await fetchData();

  return (
    <div>
      <Header header={header} />
      <StoryblokStory story={story} />
    </div>
  );
}
async function fetchData() {
  const sbParams: ISbStoriesParams = {resolve_links: "url",
      version: "draft",
    resolve_relations: [
            'global_reference.reference']}

  const storyblokApi = getStoryblokApi();
  try {
    const { data } = await storyblokApi.get(`cdn/stories/home`, sbParams);
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
