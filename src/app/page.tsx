import type {
  ISbStoriesParams,
  StoryblokClient,
} from '@storyblok/react/rsc';
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

export default async function Home() {
  // @ts-ignore
  const { story, header, footer } = await fetchData();

  return (
    <div>
      {JSON.stringify(header)}
      {JSON.stringify(footer)}
      <Header blok={header} />
      <StoryblokStory story={story} />
      <Footer blok={footer} />
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
    console.log(header.data.story.content)
    return { story: data.story, header: header.data.story.content, footer: footer.data.story.content };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
