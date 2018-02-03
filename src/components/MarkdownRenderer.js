import React from 'react';
import ReactMarkdown from 'react-markdown';
import * as R from 'ramda';

export default ({ markdown }) => {
	const renderHeadings = ({ level, children }) => 
		React.createElement(`h${level}`, { className: `b-h${level}` }, children.join(' '));

	const renderParagraph = ({ children }) => {
		const Image = (props) => <div className="b-inline-img"><img {...props} /></div>;
		const containsImage = children.filter(R.propEq('type', 'img')).length > 0;
		if (containsImage) return (
			<div className="flex">
				{	
					children.map((x, i) => x.type === "img" ? 
						<Image key={i} {...x.props} /> : 
						<p key={i} className="b-inline-p">{x}</p> ) 
				}
			</div>
		);
		return <p>{children}</p>;
	}
	
	return (
		<ReactMarkdown
	    source={markdown}
	    skipHtml={false}
	    escapeHtml={false}
	    transformLinkUri={uri => uri}
	    renderers={{
	    	heading: renderHeadings,
	    	paragraph: renderParagraph
	    }}/>
  );
}
