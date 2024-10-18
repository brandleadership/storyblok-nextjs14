"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
/** Import your components */
import Page from "./Page";
import Header from "./Header";
import Hero from "./Hero";
import RichtextExample from "./RichtextExample";

const components = {
  page: Page,
  Header: Header,
  hero: Hero,
  richtext_example: RichtextExample,
};

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }: any) {
  return children;
}
