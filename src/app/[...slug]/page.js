import { getStoryblokApi, apiPlugin, storyblokInit } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

async function fetchData(slug) {
  const sbParams = {
    resolve_links: "url",
    version: "draft",
  };

  const storyblokApi = getStoryblokApi();
  try {
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

    return {
      story: data.story,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default async function Page({ params }) {
  const slug = Array.isArray(params?.slug) ? params.slug.join("/") : "home";
  const data = await fetchData(slug);
  const { story } = data;

  return (
    <div>
      <StoryblokStory story={story} />
    </div>
  );
}

export async function getInitialProps({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: "draft",
  });

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}





