import React from 'react';
import * as R from 'ramda';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Radium from 'radium';  

import Cover from './tiles/Cover';
import SideScroll from './SideScroll';
import BlogThumbLarge from './tiles/BlogThumbLarge';
import BlogThumbMedium from './tiles/BlogThumbMedium';

import groupPostsBy from '../utils/groupPostsBy';
import blogPosts from '../static/posts.json';

const Blog = () => {
  const cover = R.find(x => x.meta.cover, blogPosts);
  const posts = blogPosts.filter(post => !R.propEq('title', cover.title, post));
  const layout = [2, 100]

  const makeLayout = (layout, posts) => R.reduce((a, b) => {
    if (R.isEmpty(a)) return R.append([b], a);
    if (R.last(a).length < layout[a.length - 1]) return R.append(R.append(b, R.last(a)), R.init(a))
    return R.append([b], a);
  }, [], posts)

  return (
    <div
      className={classNames('mx-auto', { 'px3': window.innerWidth > 590, 'px1': window.innerWidth < 590 })}
      style={{ maxWidth: '70rem' }}>
      <div className={classNames({ 'pb3 pt2 pl3': window.innerWidth > 590, 'pb2 pt1 pl1': window.innerWidth < 590, })}>
        <h1 className="my3">Daniel Beaven</h1>
        <p style={{ maxWidth: '30rem' }}>
          This blog contains essays I have written as part of my degree course Interaction Design Arts. Each week I am required  to write up a 300 word post relating to the topic covered in that weeks lecture.
        </p>
      </div>
      <div className="flex flex-wrap border-box">
        <div style={{ borderTop: '1px solid #a0a0a0', flex: '0 0 100%' }}>
          <Cover
            title={cover.title}
            description={cover.meta.description}
            gallery={cover.meta.images && cover.meta.images.gallery}
            thumb={cover.meta.images && cover.meta.images.thumbnail}
          />  
        </div>
        { 
          makeLayout([2, 100], posts).map((section, i1) => {
            if (section.length > 3) return (
              <SideScroll className="py3" style={{ borderTop: '1px solid #a0a0a0' }} width="33%">
                { 
                  section.map((post, i2) => (
                    <div
                      key={i2 + 10}
                      style={{ flex: '0 0 33vw' }}
                      className={classNames('px3 border-box', {
                        'c-border-l': i2 > 0 && section.length > 2
                      })}>
                      <Link to={'article/' + post.title.split(' ').join('_')}>
                        <h3 className="m0">{post.title}</h3>
                        <p className="mb0">{post.meta.description}</p>
                      </Link>
                    </div>
                  ))
                }
              </SideScroll>
            )
            return (
              <div className="flex py3 border-box justify-center" key={i1} style={{ width: '100%', borderTop: '1px solid #a0a0a0' }}>
                { 
                  section.map((post, i2) => {
                    const thumb = R.path(['meta', 'images', 'thumbnail'], post);
                    if (thumb && section.length < 3 && i2 < 2) return (
                      <BlogThumbMedium
                        key={i2 + 10}
                        title={post.title}
                        description={post.meta.description}
                        image={thumb}
                        borderLeft={i2 === 1} />
                    )
                    return (
                      <div
                        key={i2 + 10}
                        style={{ maxWidth: '590px', minWidth: '33%' }}
                        className={classNames('px3 border-box', {
                          'c-border-x': i2 === 1 && section.length > 2,
                          'c-border-l': i2 === 1 && section.length === 2
                        })}>
                        <Link to={'article/' + post.title.split(' ').join('_')}>
                          <h3 className="m0">{post.title}</h3>
                          <p className="mb0">{post.meta.description}</p>
                        </Link>
                      </div>
                    );
                  })
                }
              </div>
          )})
        }
        <p className="flex items-center jusify-center fit p2" style={{ width: '100%' }}>
          <a className="center" style={{ width: '100%' }} href="mailto:dm.beaven@gmail.com?Subject=hello">dm.beaven@gmail.com</a>
        </p>
      </div>
    </div>
  )
}

export default Radium(Blog);
