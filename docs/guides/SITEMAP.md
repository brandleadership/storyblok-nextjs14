# Working with Sitemaps

First, install the `next-sitemap` package:

Run `npm install next-sitemap` or `npm install` if it's already installed by another developer, which it is in this project.

### next-sitemap.config.js

```js
module.exports = {
    siteUrl: 'https://www.yourdomain.com', // Change to your site URL
    generateRobotsTxt: true, // (optional)
    // ...other options
};
```

### package.json

To create a new Sitemap, the new script was added to the package.json, you could simply run `npm run postbuild` to create a new Sitemap.

```json
"scripts": {
"postbuild": "next-sitemap"
}
```

### Additional Commands

`npm run build`

`npx next-sitemap --config ./next-sitemap.config.js`

`npx next-sitemap (preview it locally)`

**[Link to documentation!](https://www.npmjs.com/package/next-sitemap)**

> **Important Note:** !!! Add languages according to the needs of the project.
