import React from 'react';
import { Link } from 'react-router-dom';

const BlogThumbTop = ({ title, description, image={src:''} }) => (
  <Link to={'article/' + title.split(' ').join('_')}>
    {
      window.innerWidth < 700 ? (
        <div className="flex py3 px3 border-box flex-column">
          <h1 style={{ marginTop: '-11px' }}>{title}</h1>
          <img role="presentation" className="" style={{ width: '100%' }} src={image.src} />
          <p className="mb0">{description}</p>
        </div>
      ) : (
        <div className="flex py3 px3 border-box items-start">
          <img role="presentation" className="" style={{ flex: '0 0 66.66%', width: '66.66%' }} src={image.src} />
          <div className="pl3 border-box self-start">
            <h3 style={{ marginTop: '-11px' }}>{title}</h3>
            <p className="mb0">{description}</p>
          </div>
        </div>
      )
    }
  </Link>
);

export default BlogThumbTop;
