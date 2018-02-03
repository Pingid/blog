import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import classNames from 'classnames';
import groupPosts from '../utils/groupPosts';

import articles from '../articles.json';

const PostsList = () => {
	const grouped = groupPosts(articles);


	const Third = styled.div` flex: 0 0 33.33%; `
	const TwoThird = styled.div` flex: 0 0 66.66%; `
	const Full = styled.div` flex: 1 0 100%; `

	return (
		<div>
			<div className="pb3 pt2 pl3">
		    <h1 className="my3">Daniel Beaven</h1>
		    <p style={{ maxWidth: '30rem' }}>
		      This blog contains essays I have written as part of my degree course Interaction Design Arts. Each week I am required  to write up a 300 word post relating to the topic covered in that weeks lecture.
		    </p>
		  </div>
		  <div className="flex flex-wrap">
		  </div>
		</div>
	)
}

export default PostsList;		