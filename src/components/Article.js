import React from 'react';
import * as R from 'ramda';
import MarkdownRenderer from './MarkdownRenderer';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import '../styles/blog-post.css';

import { routeTitle } from '../utils/utils';
import blogPosts from '../static/posts.json';


class Article extends React.Component {
  componentWillUnmount() {}
  componentDidMount() {
    const { match } = this.props;

    const s = document.createElement('script');
    s.src = 'https://blog-ryongs1bcx.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    document.body.appendChild(s);

    setTimeout(() => {
      console.log(window.DISQUS)

      window.DISQUS.reset({
        reload: true,
        config: function () {  
          this.page.identifier = match.params.article;  
          this.page.url = `http://www.danbeaven.co.uk/blog/#/${match.params.article}`;
        }
      });
    }, 0)
    

    // const d = document; 
    // const s = d.createElement('script');
    // s.src = 'https://blog-ryongs1bcx.disqus.com/embed.js';
    // s.setAttribute('data-timestamp', +new Date());
    // (d.head || d.body).appendChild(s);


    //
  }
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
