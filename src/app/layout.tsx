import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";
import "./globals.css";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  );
}
