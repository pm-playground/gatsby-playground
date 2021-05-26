const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query LeistungData{
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/leistungen/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/leistungen/"+ node.frontmatter.slug,
      component: path.resolve("./src/templates/leistung-details.js"),
      context: { slug: node.frontmatter.slug }
    })
  })
}
