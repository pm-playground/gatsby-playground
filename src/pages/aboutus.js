import { graphql } from "gatsby"
import React from "react"
import Layout from '../components/Layout'

export default function Aboutus({data}) {
  console.log(data)
  const content = data.allMarkdownRemark.nodes[0].html
  return (
    <Layout>
      <div>
        {content}
      </div>
    </Layout>
  )
}


export const query = graphql`
 {
  allMarkdownRemark {
    nodes {
      html
      frontmatter {
        stack
        title
      }
    }
  }
}

`