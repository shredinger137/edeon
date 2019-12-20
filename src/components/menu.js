import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

export default class Menu extends Component {

  
  menuToggle() {

    if(this.button){this.button.classList.toggle("change"); } else {console.log("Didn't find");}
    if(this.menu && this.menu.style){this.menu.classList.toggle("menuExpanded");}
  } 

  render() {

    return (
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
            <div className="menubutton" id="menuButton" ref={element => {this.button = element;}} onClick={this.menuToggle.bind(this)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>


          <ul className="nav menu" ref={element => {this.menu = element;}}>
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
                              <Link to={child.object_slug}
                                className="dropdown-item"
                                alt={child.title}
                              >
                                {child.title}
                              </Link>
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
  }
}
