# Working with Types

Link to the Docs https://www.storyblok.com/faq/how-can-i-utilize-typescript-in-my-storyblok-project

This guide will walk you through setting up Storyblok CLI, pulling component schemas, and generating TypeScript types for your project.

### Steps

1. **Log in to Storyblok**  
   Open your terminal and log in to your Storyblok account by running `storyblok login`. Use the credentials you are using for your Storyblok account.

2. **Download the schema**  
   In your project directory, download the schema of your Storyblok components into a `.json` file by running:

    `storyblok pull-components --space SPACE_ID (your space id)`

    It is recommended to add this command to the scripts section of your package.json, e.g. under the identifier pull-sb-components.

3. **Generate TypeScript types**  
   In your project directory, generate TypeScript types based on the downloaded schema by running:

    `storyblok generate-typescript-typedefs --sourceFilePaths ./components.SPACE_ID.json --destinationFilePath ./component-types-sb.d.ts.`

    It is recommended to add this command to the scripts section of your package.json, e.g. under the identifier generate-sb-types.

4. **Import the type in each component**  
   Import the type in each component, for example: import type { PageStoryblok } from '../component-types-sb' or from types folder and file.

### ⚠️ Important

> **Remember to rerun the `pull-sb-components` and `generate-sb-types` scripts after you've made changes to your component schema in your Storyblok space.**
