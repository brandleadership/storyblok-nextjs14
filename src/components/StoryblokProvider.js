"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
/** Import your components */
import Page from "./Page";
import Hero from "./Hero";

const components = {
  hero: Hero,
  page: Page,
};

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
