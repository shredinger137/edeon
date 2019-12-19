const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress posts (route : /blog/{slug})
// Will create pages for WordPress projects (route : /projects/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            title
          }
        }
      }

    }
  `)

  const projects = await graphql(`
  {
    allWordpressWpProject {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
  }
  `)


  // Check for any errors
  if (pages.errors) {
    throw new Error(pages.errors)
  }

  // Access query postss via object destructuring
  const { allWordpressPage } = pages.data
  const { allWordpressWpProject } = projects.data

  const pageTemplate = path.resolve(`./src/templates/single-page.js`)
  const projectTemplate = path.resolve('./src/templates/single-project.js')

 
  allWordpressWpProject.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`,
      component: slash(projectTemplate),
      context: {
        id: edge.node.id,
        postId: edge.node.wordpress_id,
      },
    })
  })
  

  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
        postId: edge.node.wordpress_id,
      },
    })
  })
}
