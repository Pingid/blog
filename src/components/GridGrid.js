import React from 'react';
import * as R from 'ramda';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Cover from './tiles/Cover';
import Single from './tiles/Single';

import { routeTitle } from '../utils/utils';
import blogPosts from '../static/posts.json';

import '../styles/grid.css';

export default ({ layout }) => {
	const getGrid = () => {
		const { innerWidth:width } = window;
		if (width < 500) return layout.small;
		if (width < 800) return layout.medium;
		return layout.large;
	}

	const makeLayout = (layout, posts) => {
    return R.reduce((a, b) => {
      if (R.isEmpty(a) || window.innerWidth < 700) return R.append([b], a);
      if (R.last(a).length < layout[a.length - 1]) return R.append(R.append(b, R.last(a)), R.init(a))
      return R.append([b], a);
    }, [], posts)
  }
  
	return (
		<div className="container">
			{
				blogPosts.slice(0, 5).map((post, i2) => (
          <div 
            key={post.title} 
            className={classNames('item'+(i2 + 1), { 'c-border-l': i2 > 0 })} >
            <Link to={'article/' + routeTitle(post.title)}>
              <h4 className="px3 my0 bold">{post.title}</h4>
              <h4 className="px3 mt1 mb0">{post.meta.date}</h4>
            </Link>
          </div>
        ))
			}
		</div>
	)
}