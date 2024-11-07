# Template for Storyblok & Next JS 14 Setup

## Purpose

This Repository serves as a Template for new Storyblok Projects. It has all of the initial configuration for a:

-   Storyblok Space based on the Template Space available in the Partner Portal
-   Next.JS, React & Typescript Stack
-   Vercel for Deployment and Hosting

| To create a new Project, please use the "Use as a Template" Button on the Github Repository to create a new Repository based on this Template Setup. No project specific work should be done in this project.

## Local Setup

Clone repository and run `npm i` to set up the Project locally.

### Setup for local development

1. Setup proxy (see link here)
2. ...

Link to docs https://www.storyblok.com/faq/how-can-i-utilize-typescript-in-my-storyblok-project

This guide will walk you through setting up Storyblok CLI, pulling component schemas, and generating TypeScript types for your project.

### Installation

1. **Install Storyblok CLI globally**  
   Run the following command to install the Storyblok CLI globally on your machine:

    npm i -g storyblok

### Steps

2. **Log in to Storyblok**  
   Open your terminal and log in to your Storyblok account by running `storyblok login`. Use the credentials you are using for your Storyblok account.

3. **Download the schema**  
   In your project directory, download the schema of your Storyblok components into a `.json` file by running:

    `storyblok pull-components --space SPACE_ID (your space id)`

    It is recommended to add this command to the scripts section of your package.json, e.g. under the identifier pull-sb-components.

4. **Generate TypeScript types**  
   In your project directory, generate TypeScript types based on the downloaded schema by running:

    `storyblok generate-typescript-typedefs --sourceFilePaths ./components.SPACE_ID.json --destinationFilePath ./component-types-sb.d.ts.`

    It is recommended to add this command to the scripts section of your package.json, e.g. under the identifier generate-sb-types.

5. **Import the type in each component**  
   Import the type in each component, for example: import type { PageStoryblok } from '../component-types-sb' or from types folder and file.

### ⚠️ Important

**Remember to rerun the `pull-sb-components` and `generate-sb-types` scripts after you've made changes to your component schema in your Storyblok space.**

## Vercel Setup

If you want to create a new Project:

1. Make sure you're in the GateB Vercel Team
2. Create new Project and choose the correct Github repository. Add the Environment variable from Storyblok.
3. ...

## Storyblok Setup

1. Duplicate existing Template Space in Partner Portal. This will take over all existing configurations.
2. For the local development setup, in Storyblok > Settings > Visual Editor, in Location (default environment), change the value to `https://localhost:3010/`. Add the other Preview links as soon as you've set them up in Vercel.

3. Install and set up 'Vercel Deployments' App in Storyblok and connect it with Vercel Project.
