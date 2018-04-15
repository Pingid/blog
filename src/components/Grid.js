import React from 'react'
import * as R from 'ramda'
import classNames from 'classnames'
import Link from 'gatsby-link'

import Cover from './tiles/Cover'
import Single from './tiles/Single'
import SideScroll from './SideScroll'

import '../styles/tiles.css'

const PostGrid = ({ posts: blogPosts, galleries }) => {
  console.log(blogPosts)
  const cover = R.find(x => x.frontmatter.gallery, blogPosts)
  const posts = blogPosts
    .filter(
      post => !R.propEq('title', cover.frontmatter.title, post.frontmatter)
    )
    .sort((a, b) => {
      if (a.frontmatter.essay === b.frontmatter.essay) return 0
      if (a.frontmatter.essay) return -1
      if (b.frontmatter.essay) return 1
    })

  console.log(posts)
  const makeLayout = (layout, posts) => {
    return R.reduce(
      (a, b) => {
        if (R.isEmpty(a) || window.innerWidth < 700) return R.append([b], a)
        if (R.last(a).length < layout[a.length - 1])
          return R.append(R.append(b, R.last(a)), R.init(a))
        return R.append([b], a)
      },
      [],
      posts
    )
  }

  return (
    <div
      className={classNames({
        px3: window.innerWidth > 590,
        px1: window.innerWidth < 590,
      })}
    >
      <div className="flex flex-wrap border-box">
        {
          // <GridGrid
          //   layout={{
          //     large: [1, 2, 3, 100],
          //     medium: [1, 2, 2, 100],
          //     small: [1, 1, 1, 1, 1, 100]
          //   }}
          // />
        }
        {
          <div style={{ borderTop: '1px solid #a0a0a0', flex: '0 0 100%' }}>
            <Cover
              title={cover.frontmatter.title}
              description={cover.frontmatter.description}
              gallery={galleries[cover.frontmatter.gallery]}
              thumb={cover.frontmatter.thumbnail}
              date={cover.frontmatter.date}
              slug={cover.fields.slug}
            />
          </div>
        }
        {makeLayout([2, 3, 100], posts).map((section, i1) => {
          if (section.length > 3)
            return (
              <SideScroll
                key={i1}
                className="py3"
                style={{ borderTop: '1px solid #a0a0a0' }}
                width="33%"
              >
                {section.map((post, i2) => (
                  <div
                    key={post.frontmatter.title}
                    className={classNames({ 'c-border-l': i2 > 0 })}
                    style={{ flex: `1 0 20%` }}
                  >
                    <Link to={post.fields.slug}>
                      <h4 className="px3 my0 bold">{post.frontmatter.title}</h4>
                      <h4 className="px3 mt1 mb0">{post.frontmatter.date}</h4>
                    </Link>
                  </div>
                ))}
              </SideScroll>
            )
          return (
            <div
              className="flex py3 border-box thumb-row"
              key={i1}
              style={{ width: '100%', borderTop: '1px solid #a0a0a0' }}
            >
              {section.map((post, i2) => {
                return (
                  <div
                    key={post.frontmatter.title}
                    className={classNames('thumb-tile', {
                      'c-border-l': i2 > 0,
                    })}
                    style={{
                      flex: `0 0 ${
                        section.length > 3 ? 33 : 100 / section.length
                      }%`,
                    }}
                  >
                    <Single
                      size={section.length}
                      title={post.frontmatter.title}
                      date={post.frontmatter.date}
                      image={post.frontmatter.thumbnail}
                      description={post.frontmatter.description}
                      slug={post.fields.slug}
                    />
                  </div>
                )
              })}
            </div>
          )
        })}
        <p
          className="flex items-center jusify-center fit p2"
          style={{ width: '100%' }}
        >
          <a
            className="center"
            style={{ width: '100%' }}
            href="mailto:dm.beaven@gmail.com?Subject=hello"
          >
            dm.beaven@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default PostGrid
