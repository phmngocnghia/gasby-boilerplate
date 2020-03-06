import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'

import ContactHeader from '../components/pages/index/contact-header'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <ContactHeader/>
    </>
  )
}

export default IndexPage
