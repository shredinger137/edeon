import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import "../css/epo.css"

export const ProjectTemplate = ({ title, content }) => {
  return (
    <section className="page-entry">
            <div className="section">
              <h2 className="pageTitle">
                {title}
              </h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
    </section>
  )
}

ProjectTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const page = data.wordpressWpProject;
  console.log(page);
  return (
    <Layout>
      <ProjectTemplate title={page.title} content={page.content.replace(`<img src="/`, `<img src="https://epo.sonoma.edu/`)} />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query ProjectById($id: String!) {
    wordpressWpProject(id: { eq: $id }) {
      title
      content
    }
  }
`