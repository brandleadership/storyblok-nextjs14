# Possible Integrations

**Table of Contents:**

-   [Tailwind](#tailwind)
-   [Flowbite](#flowbite)
-   [Image Optimization](#image-optimization)
-   [motion.dev](#motion)
-   [Algolia](#algolia)
-   [Mailchimp](#mailchimp)
-   [Active Campaign](#activecampaign)
-   [Analytics](#analytics)

## Tailwind

This template repository is utilizing a basic Tailwind Setup with a starter configuration in the `tailwind.config.ts` file.

To customize a theme, please have a look at the official Docs: https://tailwindcss.com/docs/adding-custom-styles.

In this Repository, 3 [Plugins](https://tailwindcss.com/docs/plugins) are added:

-   **Forms Plugin**

    This Plugin allows for more control on Form styling. More Info can be found here: https://github.com/tailwindlabs/tailwindcss-forms

-   **Added Components**

    This Plugin allows creation of custom components, in case of this project custom button and image style components. These components can be used as their own CSS class on elements, for example:
    `<a className="btn btn-primary"></a>`

    More Info can be found here:
    https://tailwindcss.com/docs/plugins#adding-components

-   **Added Base Styles**

    This Plugin allows the targeting of HTML Tags. In this project, some opinionated styles are added for the `<body>` tag.
    More Info can be found here: https://tailwindcss.com/docs/plugins#adding-base-styles

## Flowbite

Flowbite is a Component Library built on top of the Tailwind CSS Design System. It is not used in this Project but it can be used in Projects as the Pro Version is available to us.

More Information can be found here: https://flowbite.com/docs/getting-started/introduction/

## Image-Optimization

For Image Optimization, this Project is set up to use the NextJS `<Image>` Component. See https://nextjs.org/docs/app/building-your-application/optimizing/images.

## Motion

As an animation library, [motion.dev](https://motion.dev/) (previously Framer Motion) is a preferred solution for now.

## Algolia

[Algolia](https://www.algolia.com/) is the recommended Search Functionality for Storyblok Projects. To be documented.

## Mailchimp

To be documented.

## Activecampaign

To be documented in more detail.

2 Links with information on how to set up a form component with Active Campaign:

-   https://dev.to/saragibby/better-way-to-embed-active-campaign-forms-into-react-n9n
-   https://dev.to/saragibby/better-way-to-embed-active-campaign-forms-into-react-n9n

## Analytics

To be documented.

Helpful links:

-   https://nextjs.org/docs/pages/building-your-application/optimizing/third-party-libraries#google-tag-manager
