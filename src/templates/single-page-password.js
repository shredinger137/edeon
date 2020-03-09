import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Password from '../components/passwordprompt'


export const PageTemplatePassword = ({ title, content }) => {


  return (
    <section className="page-entry">
            <div className="section">
              <br/>
              <h2 className="pageTitle">
                {title}
              </h2>
              <Password content = {content}/>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          <br/>
    </section>
  )
}

PageTemplatePassword.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <Layout pageTitle={page.title}>
      <PageTemplatePassword title={page.title} content={page.content.replace(/<img src="\//g, `<img src="https://epo.sonoma.edu/`)} />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageByIdPassworded($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`