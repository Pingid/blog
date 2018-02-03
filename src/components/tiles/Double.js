import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class Double extends React.Component {
	state = { thumb: null }
	componentDidMount() {
		const { image } = this.props;
		let thumb = new Image();
		thumb.src = image;
		thumb.onload = () => this.setState({ thumb });
	}
	render() {
		const { title, image, description, date } = this.props;
		const { thumb } = this.state;

		const Image = styled.img`
			max-height: 10rem;
		`
		return (
			<div className="px3">
				<Link to={'article/' + title.split(' ').join('_')}>
					<h3 className="m0">{ title }</h3>
				</Link>
				<h4 className="m0 py2 italic">{moment(date, 'DD-MM-YYYY').format("D MMM YY")}</h4>
				<p className="m0 left"><Image src={thumb && thumb.src} className="left pr2" />{ description }</p>
			</div>
		)
	}
}