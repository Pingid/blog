import React from 'react';

export default (Comp) => {
	return class extends React.Component {
		componentDidMount() { window.scrollTo(0,0) }
		render() { return <Comp {...this.props} /> }
	}
} 