import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import image from '../images/slika.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Vrtić Tin Tin Beograd" />
    <h1>Sajt je u izradi</h1>
    <div style={{ marginBottom: `3.45rem` }}>
      <img src={image} alt=""/>
    </div>
  </Layout>
)

export default IndexPage
