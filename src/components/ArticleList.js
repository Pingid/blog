import React from 'react';
import { Link } from 'react-router-dom';
import normaliseTitleURL from '../utils/normaliseTitleURL';
import articles from '../articles'

export default class ArticleList extends React.Component {
  render() {
    return (
      <div>
        {
          articles.map((article, index) => (
            <div key={index}>
              <Link to={`/essays/${normaliseTitleURL(article.title)}`}><h1>{article.title}</h1></Link>
            </div>
          ))
        }
      </div>
    )
  }
}
