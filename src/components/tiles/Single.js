import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { routeTitle } from '../../utils/utils';

export default ({ size, title, image, description, date }) => {
	const Image = styled.img`
		max-height: 10rem;
		float: left;
	`
	const dateFormat =  moment(date, 'DD-MM-YYYY').format("D MMM YY");
	return (
		<Link to={'article/' + routeTitle(title)}>
			<div className="px3" style={{ clear: 'both' }}>
				<h3 className="m0">{ title }</h3>
				<h4 className="m0 py2 italic">{dateFormat}</h4>
				{ image && <Image src={image} className="pr2 pb1" /> }
				{ description && (
					<p className="mt0">
						<span className="nowrap">{ description.slice(0, 10) }</span>
						{ description.slice(10, description.length) }
					</p>
				)}
			</div>
		</Link>
	)
}