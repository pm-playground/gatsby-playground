/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `leistungen`,
        path: `${__dirname}/src/leistungen/`,
      },
    },
  ],
  siteMetadata: {
    title: "ITcreate test page",
    description: "POC gatsby website",
    copyright: "copyright 2021 ITcreate Berlin",
  },
}
