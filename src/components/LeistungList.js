import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import * as styles from '../styles/leistunglist.module.css'

export default function LeistungList() {
  
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/leistungen/" } }) {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }
  `)

  const leistungen = data.allMarkdownRemark.nodes
  return (
    <div className={styles.w50}>
      {leistungen.map(l => (
        <Link to={`/leistungen/${l.frontmatter.slug}`} key={l.id}>
          <div>
            <h4 className={styles.links} >{l.frontmatter.title}</h4>
          </div>
        </Link>
      ))}
    </div>
  )
}

