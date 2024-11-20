# Template for Storyblok & Next JS 14 Setup

This Repository serves as a Template for new Storyblok Projects. It has all of the initial configuration for a:

-   Storyblok Space based on the Template Space available in the Partner Portal
-   Next.JS, React & Typescript Stack
-   Vercel for Deployment and Hosting

> To create a new Project, please use the "Use as a Template" Button on the Github Repository to create a new Repository based on this Template Setup. No project specific work should be done in this project.

## Local Setup

### Installation

In order to work on this repository on your local machine, follow these steps:

1. **Install project setup**  
   Clone repository and run `npm i` to set up the Project locally.
   ❗Make sure you only do that when you want to work on this template, not on a project.

2. **Install Storyblok CLI globally**  
   Run the following command to install the Storyblok CLI globally on your machine:

    `npm i -g storyblok`

3. **Start Proxy**
   Run the proxy to have a preview in Storyblok
   `npm run proxy`

4. **Start the Project**
   Run the following command to preview the project locally on your machine:
   `npm run dev`

## Setup for a new Project

If you want to create a new project based on this template please follow the detailed documentation from the `docs/` folder in the following order:

1. `docs/guides/TEMPLATE_USAGE.md` - explanation on how to work with templates.
2. `docs/guides/VERSEL.md` - connect your project to Vercel and add previews.
3. `docs/guides/TYPESCRIPT.md` - explanation on how to work with typescript with the current set up.
4. `docs/guides/SITEMAP.md` - settings for automatised sitemap.
