const puppeteer = require("puppeteer");

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Using MDX example`,
    description: `Kick off your next, great Gatsby project with MDX.`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-mermaid`,
            options: {
              launchOptions: {
                executablePath: puppeteer.executablePath(),
                defaultViewport: {
                  width: 600,
                  height: 3000,
                }
              },
              svgo: {
                plugins: [
                  { name: 'removeTitle', active: false },
                ],
              },
              mermaidOptions: {
                theme: 'neutral',
                themeCSS: '.node rect { fill: #fff; }',
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
            },
          },
        ],
        mdxOptions: {
          remarkPlugins: [
            require(`remark-gfm`),
            require(`remark-unwrap-images`),
            [require(`remark-external-links`), {target: false}],
            // [wrapESMPlugin(`remark-mermaidjs`), {
            //     launchOptions: {
            //         executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
            //         defaultViewport: {
            //             width: 1280,
            //             height: 3000,
            //         }
            //     },
            //     mermaidOptions: {
            //         theme: 'neutral',
            //     },
            // },]
          ],
          rehypePlugins: [
            // Generate heading ids for rehype-autolink-headings
            require(`rehype-slug`),
            // To pass options, use a 2-element array with the
            // configuration in an object in the second element
            [require(`rehype-autolink-headings`), {behavior: `wrap`}],
          ],
        },
      },
    },
  ],
};
