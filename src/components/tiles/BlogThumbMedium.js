import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const BlogThumbMedium = ({ title, description, image, borderLeft }) => (
  <Link
    to={'article/' + title.split(' ').join('_')}
    className={classNames('px3 border-box', { 'c-border-l': borderLeft })}>
    {
      window.innerWidth < 590 ? (
        <div className="flex border-box items-center flex-column">
          <h3 className="m0 center">{title}</h3>
          <img role="presentation" className="py1" style={{ maxWidth: '100%' }} src={image.src} />
          <p className="mb0 center">{description}</p>
        </div>
      ) : (
        <div className="flex border-box items-start">
          <img role="presentation" className="py1" style={{ flex: '0 0 50%', maxWidth: '50%' }} src={image.src} />
          <div className="pl3 border-box">
            <h3 className="m0">{title}</h3>
            <p className="mb0">{description}</p>
          </div>
        </div>
      )
    }
  </Link>
);

export default BlogThumbMedium;
