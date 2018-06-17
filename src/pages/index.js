import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Grid from '../components/Grid'
import Bio from '../components/Bio'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    const galleries = get(this, 'props.data.allFile.edges')
      .map(x => x.node)
      .filter(x => x.childImageSharp)
      .reduce((a, b) => {
        const key = b.relativeDirectory
        return Object.assign(a, {
          [key]: [].concat(a[key] || [], [b.childImageSharp]),
        })
      }, {})

    return (
      <div className="mx-auto" style={{ maxWidth: '70rem' }}>
        <Helmet title={siteTitle} />
        <Bio />
        <Grid posts={posts.map(x => x.node)} galleries={galleries} />
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
      edges {
        node {
          relativeDirectory
          childImageSharp {
            ... on ImageSharp {
              sizes(maxWidth: 800) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            description
            thumbnail
            gallery
            essay
            cover
          }
        }
      }
    }
  }
`
