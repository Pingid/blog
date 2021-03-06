import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import classNames from 'classnames'
import styled from 'styled-components'

import Bio from '../components/Bio'
// import { rhythm, scale } from '../utils/typography'

const BackButton = styled.h1`
  top: 0;
  padding-left: 2rem;
  @media (max-width: 500px) {
    padding-left: 1rem;
  }
`

const ArticleWrapper = styled.div`
  max-width: 41rem; 
  margin: 0 auto;
  padding: 0px 2rem;
  @media (max-width: 500px) {
    padding: 0px 1rem;
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const { history } = this.props
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext
    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`}>
          <style type="text/css">{`
            h1 { margin: 6rem 0rem; }
            h2 { font-size: 25px; color: #989898; margin: 2rem 0; }
            h3 { font-size: 40px; margin-top: 4rem; }
            h4 { font-size: 30px; margin-top: 4rem; margin-bottom: 1.5rem; }
            img { max-width: 50%; float: left; margin-top: .5rem; padding-right: 1.8rem; padding-bottom: 1rem; }
            a { color: blue; }
            a:visited { color: lightblue }
            
            @media only screen and (max-width: 550px) { h1  { margin: 3rem 0rem; } }
          `}</style>
        </Helmet>
        <Link to="/">
          <BackButton className="fixed m0">
            {'<-'}
          </BackButton>
        </Link>
        <ArticleWrapper>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </ArticleWrapper>
        <div className="flex justify-between mt4 mb4 px2">
          {previous && (
            <Link
              to={previous.fields.slug}
              rel="previous"
              style={{ color: 'black' }}
              className="flex items-center"
            >
              <h3 className="m0">{'<-'}</h3>
              <h5 className="m0 mt1 pl1 hide-sm">
                {previous.frontmatter.title.length <= 20
                  ? previous.frontmatter.title
                  : previous.frontmatter.title.slice(0, 20) + '...'}
              </h5>
            </Link>
          )}

          {next && (
            <Link
              to={next.fields.slug}
              rel="next"
              style={{ color: 'black' }}
              className="flex items-center"
            >
              <h5 className="m0 mt1 pr1 hide-sm">
                {next.frontmatter.title.length <= 20
                  ? next.frontmatter.title
                  : next.frontmatter.title.slice(0, 20) + '...'}
              </h5>
              <h3 className="m0">{'->'}</h3>
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
