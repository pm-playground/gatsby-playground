import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/leistungpage.module.css"
import LeistungList from "../../components/LeistungList"

export default function Leistungen() {
  return (
    <Layout>
      <div className={styles.container}>
      <div>
        <h1>I am leistung page</h1>
        <img src='dentist.jpg' />
      </div>
        <LeistungList />
      </div>
    </Layout>
  )
}
