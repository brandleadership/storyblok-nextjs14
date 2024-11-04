# storyblok-nextjs14 boilerplate

## Installation of packadge:

First, install the `next-sitemap` package:

npm install next-sitemap or npm install if already installed by other developer

# next-sitemap.config.js
module.exports = {
  siteUrl: 'https://www.yourdomain.com', // Change to your site URL
  generateRobotsTxt: true, // (optional)
  // ...other options
};

# packadge.json

"scripts": {
  "postbuild": "next-sitemap"
}

# additional commands

npm run build
npx next-sitemap  (preview it locally)


**[Link to documentation!](https://www.npmjs.com/package/next-sitemap)**


> **Important Note:** !!! Add languages according to the needs of the project.
