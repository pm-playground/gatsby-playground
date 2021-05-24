import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

//* ⬇ destructuring the `data` from `props` => `(props.data)`
export default function Home({data}) {
  console.log(data)
  //* ⬇️ destructuring the title and description from the `data` object
  const {title, description} = data.site.siteMetadata
  return (
     <Layout>
       <div className={styles.header}>
         <div>
           <h2>{title}</h2>
           <h3>{description}</h3>
           <button className={styles.btn}>Button</button>
         </div>
         <img src="laptop.svg" alt="laptop"/>
       </div>
     </Layout>)
}

//* ⬇️ graphql PAGE query, the data is coming from gatsby-config.js
export const query = graphql`
query SiteInfo {
  site {
		siteMetadata{
			title,
      description
    }
  }
}
`