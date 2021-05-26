import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/leistung-details.module.css'
import LeistungList from '../components/LeistungList'

export default function LeistungDetails({data}) {
  const {html} = data.markdownRemark
  const {title, stack} = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.details}>
          <h2>{title}</h2>
          <h3>{stack}</h3>
          <div className={styles.featured}>Image here</div>
          <div className={styles.html}dangerouslySetInnerHTML={{__html: html}} />
        </div>
        <LeistungList />
      </div>
    </Layout>
  )
}

export const query = graphql`
query LeistungDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
    }
  }
}

`