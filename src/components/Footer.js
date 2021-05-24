import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export default function Footer() {
  //! you NEED to do STATIC query in a component which is NOT a page
  //! we need to use the useStaticQuery hook inside the component
  //! you can use useStaticQuery hooks only once in a component!!!
  const data = useStaticQuery(graphql`
    query SiteFooter {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)
  //* ⬇️ destructuring the copyright from the `data` object
  const { copyright } = data.site.siteMetadata
  return (
    <footer>
      <p>©{copyright}</p>
    </footer>
  )
}
