import React from 'react';
import * as R from 'ramda';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Radium from 'radium';  

import Cover from './tiles/Cover';
import BlogThumbLarge from './tiles/BlogThumbLarge';
import BlogThumbMedium from './tiles/BlogThumbMedium';

import groupPostsBy from '../utils/groupPostsBy';
import blogPosts from '../static/posts.json';

const Blog = () => {
  const unixTime = str => moment(str, 'DD-MM-YYYY').unix()
  const posts = blogPosts.sort((a, b) => unixTime(b.meta.date) - unixTime(a.meta.date))
  const getTileSize = post => R.path(['meta', 'images', 'thumbnail'], post) ? 2 : 1;
  const setTileSizes = R.map(x => R.merge(x, { size: getTileSize(x) }))
  const cover = R.find(x => x.meta.cover, posts);
  const rest = setTileSizes(posts.filter(x => x.title !== cover.title))
  const group = (posts) => groupPostsBy(posts, R.min(Math.round(window.innerWidth * 0.002277904328), 3))
  const grouped = { cover, rest: group(rest) };

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
            title={grouped.cover.title}
            description={grouped.cover.meta.description}
            gallery={grouped.cover.meta.images && grouped.cover.meta.images.gallery}
            thumb={grouped.cover.meta.images && grouped.cover.meta.images.thumbnail}
          />  
        </div>
        {
          grouped.rest.map((section, i1) => (
            <div className="flex py3 border-box justify-center" key={i1} style={{ width: '100%', borderTop: '1px solid #a0a0a0' }}>
              {
                section.length < 1 ? null : section.map((post, i2) => {
                  const thumb = R.path(['meta', 'images', 'thumbnail'], post);
                  if (thumb)
                    return <BlogThumbMedium
                              key={i2 + 10}
                              title={post.title}
                              description={post.description}
                              image={thumb}
                              borderLeft={i2 === 1} />
                  return (
                    <div
                      key={i2 + 10}
                      style={{ maxWidth: '590px', minWidth: '33%' }}
                      className={classNames('px3 border-box', {
                        'c-border-x': i2 === 1 && section.length > 2,
                        'c-border-l': i2 === 1 && section.length === 2
                      })}>
                      <Link to={'blog/' + post.title.split(' ').join('_')}>
                        <h3 className="m0 center">{post.title}</h3>
                        <p className="mb0 center">{post.description}</p>
                      </Link>
                    </div>
                  );
                })
              }
            </div>
          ))
        }
        <p className="flex items-center jusify-center fit p2" style={{ width: '100%' }}>
          <a className="center" style={{ width: '100%' }} href="mailto:dm.beaven@gmail.com?Subject=hello">dm.beaven@gmail.com</a>
        </p>
      </div>
    </div>
  )
}

export default Radium(Blog);
