import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import normaliseTitleURL from '../utils/normaliseTitleURL';
import articles from '../articles'
import '../styles/Article.css';

export default class ArticleList extends React.Component {
  render() {
    const { match } = this.props;
    const currentArticle = articles.filter(art => normaliseTitleURL(art.title) === match.params.article)[0]
    return (
      <div>
        <div className="link-back-to-articles">
          <Link to="/" className="text-decoration-none" style={{ color: 'black' }}>Article</Link>
          <span className="px1">{'>'}</span>
          {currentArticle.title}
        </div>
        <div className="article-wrapper">
          <div className="article-title">
            <h1 className="title">{currentArticle.title}</h1>
            {currentArticle.props && currentArticle.props.thumbnail && <img className="thumbnail" src={currentArticle.props.thumbnail}></img>}
          </div>
          <div className="article-content-wrapper">
            <ReactMarkdown
              source={currentArticle.markdown}
              skipHtml={false}
              escapeHtml={false}
              transformLinkUri={uri => uri}
              allowNode={node => !(node.type === 'Heading' && node.props.level === 1)}
              disallowedTypes={['CodeBlock', 'h1']} />
          </div>
        </div>
      </div>
    )
  }
}
