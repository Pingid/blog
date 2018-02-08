import React from 'react';
import * as R from 'ramda';
import MarkdownRenderer from './MarkdownRenderer';
import '../styles/blog-post.css';

import { routeTitle } from '../utils/utils';
import blogPosts from '../static/posts.json';

const Article = ({ match, history }) => {
  const post = R.find(x => routeTitle(x.title) === match.params.article, blogPosts);
  if (!post) { history.push('/'); return null; }
  return (
    <div>
      <div
        className="px3"
        style={{ maxWidth: '41rem', margin: '0 auto' }}>
        <MarkdownRenderer
          markdown={post.markdown}
        />
      </div>
    </div>
  )
};

export default Article;
