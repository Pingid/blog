import React from 'react';
import ReactMarkdown from 'react-markdown';
import * as R from 'ramda';

export default ({ markdown }) => {
	const renderHeadings = ({ level, children }) => 
		React.createElement(`h${level}`, { className: `b-h${level}` }, children.join(' '));

	const renderParagraph = ({ children }) => {
		const containsImage = children.filter(R.propEq('type', 'img')).length > 0;
		if (containsImage && children.length > 1) return (
			<p>
				{	
					children.sort(node => node.type === "img" ? -1 : 1).map((x, i) => x.type === "img" ? 
						<img className="b-inline-img" key={i} {...x.props} /> : 
						<span key={i} className="b-inline-p">{x}</span> ) 
				}
			</p>
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
