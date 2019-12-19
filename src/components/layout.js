import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../components/image"


import Header from "./header"
import "./layout.css"
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <img src={require('../images/corner_planet.png')} className="cornerPlanet"></img>
      
      <div className="contentReal" >
        <main>{children}</main>
        
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
