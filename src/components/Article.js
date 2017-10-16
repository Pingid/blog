import React from 'react';
import ReactMarkdown from 'react-markdown';
import normaliseTitleURL from '../utils/normaliseTitleURL';
import articles from '../articles'

export default class ArticleList extends React.Component {
  render() {
    const { match } = this.props;
    const currentArticle = articles.filter(art => normaliseTitleURL(art.title) === match.params.article)[0]
    console.log(currentArticle);
    return (
      <div>
        <ReactMarkdown
          source={currentArticle.markdown}
          allowNode={(node) => node.type !== 'CodeBlock'} />
      </div>
    )
  }
}
