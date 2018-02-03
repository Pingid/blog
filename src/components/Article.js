import React from 'react';
import * as R from 'ramda';
import MarkdownRenderer from './MarkdownRenderer';
import '../styles/blog-post.css';

import blogPosts from '../static/posts.json';

const BlogPost = ({ match, history }) => {
  console.log(match)
  const post = R.find(R.propEq('title', match.params.article.split('_').join(' ')), blogPosts);
  // if (!post) return history.push('/');
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

export default BlogPost;
