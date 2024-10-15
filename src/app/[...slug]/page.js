// import { getStoryblokApi, apiPlugin, storyblokInit } from "@storyblok/react";
// import StoryblokStory from "@storyblok/react/story";

// storyblokInit({
//   accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
//   use: [apiPlugin],
// });

// async function fetchData(slug) {
//   const sbParams = {
//     resolve_links: "url",
//     version: "draft",
//   };

//   const storyblokApi = getStoryblokApi();
//   try {
//     const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

//     return {
//       story: data.story,
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// export default async function Page({ params }) {
//   const slug = Array.isArray(params?.slug) ? params.slug.join("/") : "home";
//   const data = await fetchData(slug);
//   const { story } = data;

//   return (
//     <div>
//       <StoryblokStory story={story} />
//     </div>
//   );
// }

// export async function getInitialProps({ params }) {
//   let slug = params.slug ? params.slug.join("/") : "home";

//   let sbParams = {
//     version: "draft", // or 'published'
//   };

//   const storyblokApi = getStoryblokApi();
//   let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

//   return {
//     props: {
//       story: data ? data.story : false,
//       key: data ? data.story.id : false,
//     },
//     revalidate: 3600,
//   };
// }

// export async function getStaticPaths() {
//   const storyblokApi = getStoryblokApi();
//   let { data } = await storyblokApi.get("cdn/links/", {
//     version: "draft",
//   });

//   let paths = [];
//   Object.keys(data.links).forEach((linkKey) => {
//     if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
//       return;
//     }

//     const slug = data.links[linkKey].slug;
//     let splittedSlug = slug.split("/");

//     paths.push({ params: { slug: splittedSlug } });
//   });

//   return {
//     paths: paths,
//     fallback: false,
//   };
// }
import { getStoryblokApi, apiPlugin, storyblokInit } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

// Function to fetch Storyblok data based on slug
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
    return null;
  }
}

// This is the Page component that renders the Storyblok story based on the dynamic slug
export default async function Page({ params }) {
  // Determine the slug from params, default to "home"
  const slug = Array.isArray(params?.slug) ? params.slug.join("/") : "home";
  
  // Fetch data from Storyblok API
  const data = await fetchData(slug);

  // Handle the case where data is not available or the story is missing
  if (!data || !data.story) {
    return <div>Error: Story not found</div>;
  }

  // Render the Storyblok content using the fetched story data
  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}

// This function generates static paths for the dynamic routes based on the Storyblok API
export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  
  // Fetch the links from Storyblok
  const { data } = await storyblokApi.get("cdn/links/", {
    version: "draft",
  });

  // Create an array of paths from the fetched links
  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    // Push the slug to paths array
    paths.push({ slug: splittedSlug });
  });

  return paths;
}
