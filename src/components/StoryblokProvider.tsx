"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
/** Import your components */
import Page from "./sections/Page";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import RichtextExample from "./sections/RichtextExample";

const components = {
  page: Page,
  Header: Header,
  Footer: Footer,
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
