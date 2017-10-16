import React from 'react';
import { Link } from 'react-router-dom';
import normaliseTitleURL from '../utils/normaliseTitleURL';
import articles from '../articles'

export default class ArticleList extends React.Component {
  render() {
    return (
      <div className="m2">
        <h1 className="pb4">ARTICLES</h1>
        {
          articles.map((article, index) => (
            <div key={index}>
              <Link to={`/essays/${normaliseTitleURL(article.title)}`}>
                <h1 className="caps mb4" style={{ fontSize: '3rem', lineHeight: '3.5rem' }}>{article.title}</h1>
              </Link>
            </div>
          ))
        }
      </div>
    )
  }
}
