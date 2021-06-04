module.exports = {
  siteMetadata: {
    title: `Sadman's Blog`,
    author: {
      name: `Sadman Hossain`,
      summary: `who lives in Toronto and likes exploring the intersection of software and the physical world.`,
    },
    description: `My thoughts and opinions on various things.`,
    url: "https://sadman.tech",
    siteUrl: "https://sadman.tech",
    image: "/content/assets/sadman-logo.png"
  },
  flags: {
      FAST_DEV: true,
      FAST_REFRESH: true,
      LAZY_IMAGES: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          // {
          //   resolve: `gatsby-remark-autolink-headers`,
          //   options: {
          //     offsetY: `100`,
          //     removeAccents: true,
          //     elements: [`h1`, `h2`],
          //   },
          // },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
        head: false,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sadman's Blog`,
        short_name: `Sadman`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f0e65b`,
        display: `minimal-ui`,
        icon: `content/assets/sadman-logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#f0e65b`,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.sadman.tech',
        sitemap: 'https://www.sadman.tech/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
}
