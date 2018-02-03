import React from 'react';
import ReactMarkdown from 'react-markdown';
import * as R from 'ramda';

export default ({ markdown }) => {
	let references = false;
	const renderHeadings = ({ level, children }) => {
		if (children[0].toLowerCase() === 'references') { references = true }
		return React.createElement(`h${level}`, { className: `b-h${level}` }, children);
	}

	const renderParagraph = ({ children }) => {
		const containsImage = children.filter(R.propEq('type', 'img')).length > 0;
		if (containsImage && children.length > 1) return (
			<p>
				{	
					children.sort(node => node.type === "img" ? -1 : 1).map((x, i) => x.type === "img" ? 
						<img alt={x.props.src} className="b-inline-img" key={i} {...x.props} /> : 
						<span key={i} className="b-inline-p">{x}</span> ) 
				}
			</p>
		);
		if (references) return <p className="b-reference">{children}</p>
		return <p>{children}</p>;
	}

	const renderLink = ({ children, href }) => 
		<a className="b-link" href={href}>{children}</a>;
	
	return (
		<ReactMarkdown
	    source={markdown}
	    skipHtml={false}
	    escapeHtml={false}
	    transformLinkUri={uri => uri}
	    renderers={{
	    	heading: renderHeadings,
	    	paragraph: renderParagraph,
	    	link: renderLink
	    }}/>
  );
}
