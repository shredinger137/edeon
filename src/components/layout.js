import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "./seo"
import "../css/epo.css"

import Header from "./header"
import Menu from "./menu"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <body className="fullBackground">
      <Header siteTitle={data.site.siteMetadata.title} />
      <SEO title="EdEon"></SEO>
      
      <img src={require('../images/corner_planet.png')} className="cornerPlanet"></img>
      
      <div className="contentReal" >
        <main>{children}</main>
        
      </div>
      <br /><br />
      </body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
