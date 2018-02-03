import React from 'react';
import * as R from 'ramda';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Cover from './tiles/Cover';
import Single from './tiles/Single';
import SideScroll from './SideScroll';

import blogPosts from '../static/posts.json';

class Blog extends React.Component {
  // componentDidMount() {
  //   this.resize = window.addEventListener('resize', () => this.forceUpdate())
  // }
  // componentWillUnmount() { window.removeEventListener('resize', this.resize); }
  render() {
    const cover = R.find(x => x.meta.cover, blogPosts);
    const posts = blogPosts.filter(post => !R.propEq('title', cover.title, post));

    const makeLayout = (layout, posts) => {
      return R.reduce((a, b) => {
        if (R.isEmpty(a) || window.innerWidth < 700) return R.append([b], a);
        if (R.last(a).length < layout[a.length - 1]) return R.append(R.append(b, R.last(a)), R.init(a))
        return R.append([b], a);
      }, [], posts)
    }

    return (
      <div
        className={classNames('mx-auto', { 'px3': window.innerWidth > 590, 'px1': window.innerWidth < 590 })}
        style={{ maxWidth: '70rem' }}>
        <div className={classNames({ 'pb3 pt2 pl3': window.innerWidth > 590, 'pb2 pt1 pl1': window.innerWidth < 590, })}>
          <h3 style={{ fontWeight: 700 }} className="mt3 mb1">Dan Beaven</h3>
          <p style={{ maxWidth: '30rem' }}>
            This blog contains essays I have written during my (BA) Interaction Design Arts course at the London College of Communication.
          </p>
        </div>
        <div className="flex flex-wrap border-box">
          <div style={{ borderTop: '1px solid #a0a0a0', flex: '0 0 100%' }}>
            <Cover
              title={cover.title}
              description={cover.meta.description}
              gallery={cover.meta.images && cover.meta.images.gallery}
              thumb={cover.meta.images && cover.meta.images.thumbnail}
              date={cover.meta.date}
            />  
          </div>
          { 
            makeLayout([2, 3, 100], posts).map((section, i1) => {
              if (section.length > 3) return (
                <SideScroll key={i1} className="py3" style={{ borderTop: '1px solid #a0a0a0' }} width="33%">
                  { 
                    section.map((post, i2) => (
                      <div 
                        key={post.title} 
                        className={classNames({ 'c-border-l': i2 > 0 })} 
                        style={{ flex: `1 0 20%` }}>
                        <Link to={'article/' + post.title.split(' ').join('_')}>
                          <h4 className="px3 my0 bold">{post.title}</h4>
                          <h4 className="px3 mt1 mb0">{post.meta.date}</h4>
                        </Link>
                      </div>
                    ))
                  }
                </SideScroll>
              )
              return (
                <div className="flex py3 border-box" key={i1} style={{ width: '100%', borderTop: '1px solid #a0a0a0' }}>
                  { 
                    section.map((post, i2) => {
                      const thumb = R.path(['meta', 'images', 'thumbnail', 'src'], post);
                      return (
                        <div 
                          key={post.title} 
                          className={classNames({'c-border-l': i2 > 0})}
                          style={{ flex: `0 0 ${section.length > 3 ? 33 : 100 / section.length}%` }}>
                          <Single
                            size={section.length}
                            title={post.title}
                            date={post.meta.date}
                            image={thumb}
                            description={post.meta.description} />
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
}

export default Blog;
