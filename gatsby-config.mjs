import { executablePath as _executablePath } from 'puppeteer'

import { themeCSS } from './mermaid/themeCSS.mjs'
import { themeVariables } from './mermaid/themeVariables.mjs'
import { flowchartConfig } from './mermaid/diagrams/flowchartConfig.mjs'
import { sequenceConfig } from './mermaid/diagrams/sequenceConfig.mjs'
import { ganttConfig } from './mermaid/diagrams/ganttConfig.mjs'
import { journeyConfig } from './mermaid/diagrams/journeyConfig.mjs'
import { classConfig } from './mermaid/diagrams/classConfig.mjs'
import { stateConfig } from './mermaid/diagrams/stateConfig.mjs'
import { erConfig } from './mermaid/diagrams/erConfig.mjs'
import { pieConfig } from './mermaid/diagrams/pieConfig.mjs'
import { requirementConfig } from './mermaid/diagrams/requirementConfig.mjs'
import { mindmapConfig } from './mermaid/diagrams/mindmapConfig.mjs'
import { gitGraphConfig } from './mermaid/diagrams/gitGraphConfig.mjs'
import { c4Config } from './mermaid/diagrams/c4Config.mjs'
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkExternalLinks from 'remark-external-links'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/**
 * @type {import('gatsby').GatsbyConfig}
 */
export const siteMetadata = {
  title: `Using MDX example`,
  description: `Kick off your next, great Gatsby project with MDX.`,
}
export const plugins = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `./src/pages/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `./content/posts/`,
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
              executablePath: _executablePath(),
              defaultViewport: {
                width: 600,
                height: 3000,
              },
            },
            svgo: {
              plugins: [{ name: 'removeTitle', active: false }],
            },
            mermaidOptions: {
              theme: 'base',
              // themeCSS: themeCSS,
              // themeVariables: themeVariables,
              // darkMode: false,

              // // diagram config and style overrides
              // flowchart: flowchartConfig,
              // sequence: sequenceConfig,
              // gantt: ganttConfig,
              // journey: journeyConfig,
              // class: classConfig,
              // state: stateConfig,
              // er: erConfig,
              // pie: pieConfig,
              // requirement: requirementConfig,
              // mindmap: mindmapConfig,
              // gitGraph: gitGraphConfig,
              // c4: c4Config,
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
          remarkGfm,
          remarkUnwrapImages,
          [remarkExternalLinks, { target: false }],
        ],
        rehypePlugins: [
          // Generate heading ids for rehype-autolink-headings
          rehypeSlug,

          // To pass options, use a 2-element array with the
          // configuration in an object in the second element
          [rehypeAutolinkHeadings, { behavior: `wrap` }],
        ],
      },
    },
  },
]
