import React from 'react';
import * as R from 'ramda';
import MarkdownRenderer from './MarkdownRenderer';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import '../styles/blog-post.css';

import { routeTitle } from '../utils/utils';
import blogPosts from '../static/posts.json';


class Article extends React.Component {
  render() {
    const { match, history } = this.props;
    const post = R.find(x => routeTitle(x.title) === match.params.article, blogPosts);
    if (!post) { history.push('/'); return null; }
    return (
      <div>
        <div>
          <h1
            onClick={history.goBack}
            className={classNames('fixed m0 pl2 pointer', { pl3: window.innerWidth > 500})} 
            style={{ top: '0rem' }}>{'<-'}</h1>
        </div>
        <div
          className={classNames('px2', { px3: window.innerWidth > 500})}
          style={{ maxWidth: '41rem', margin: '0 auto' }}>
          <MarkdownRenderer
            markdown={post.markdown}
          />
        </div>
        <div id="disqus_thread"></div>
      </div>
    )
  }
}

export default Article;
