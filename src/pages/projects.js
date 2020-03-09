import React, { Component } from "react"
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby';

export default class Projects extends Component {
  
  //This page almost works, but URLs from images seem to not be something WP can provide. Maybe if we upload them outside of WP?
  //Not worth the effort right now.

  render() {

    return (
      <StaticQuery
        query={graphql`
          query allProjectsQuery {
              allWordpressWpProject {
                edges {
                  node {
                    id
                    content
                    order
                    slug
                    url
                    link
                    project_description
                    title
                  }
                }
              }
            }
      `   }

        render={data => (
          <Layout title="Our Projects">
          <section className="page-entry">
            <div className="section">
              <br />
              <h2 className="pageTitle">Our Projects</h2>

          <div class="projectsWrapper">
            {console.log(data.allWordpressWpProject.edges)}
          

                {data.allWordpressWpProject.edges.map(({ node }) => {
                        return ( 
                           <div>
                             <p>{node.project_description}</p>
                             </div>
                        );
                      })}

              
                  </div>
                  </div>
                  </section>
                  </Layout>
        )}
      />
    );
  }
  }



