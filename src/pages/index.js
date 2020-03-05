import React from "react"
import { Link } from "gatsby"
import { css } from 'linaria';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const style = css`
  @apply bg-red-800
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className={style}>Hi people</h1>
    <p className="bg-red-800">Welcome to your new Gatsby site.</p>
    <button>Im a button</button>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
