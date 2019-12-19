import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems(
          filter: { slug: { eq: "main" } }
        ) {
          edges {
            node {
              slug
              name
              items {
                title
                url
                object_slug
                wordpress_children {
                  title
                  url
                  object_slug
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        
        <nav className="main-navigation">
          <div className="navwrapper">
          <ul className="nav menu">
            {data &&
              data.allWordpressWpApiMenusMenusItems &&
              data.allWordpressWpApiMenusMenusItems.edges &&
              data.allWordpressWpApiMenusMenusItems.edges[0] &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                prop => {
                  return (
                    <li className="nav-item">
                      <Link to={prop.object_slug}
                        className="nav-link active"
                        alt={prop.title}
                      >
                        {prop.title}
                      </Link>
                      <div className="sub-menu">
                        {prop &&
                          prop.wordpress_children &&
                          prop.wordpress_children.map(child => {
                            return (
                              <a
                                className="dropdown-item"
                                href={child.object_slug}
                                alt={child.title}
                              >
                                {child.title}
                              </a>
                            )
                          })}
                      </div>
                    </li>
                  )
                }
              )}
          </ul>
          </div>
        </nav>
      )
    }}
  />
)