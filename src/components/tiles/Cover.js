import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as R from 'ramda';

import ImageGallery from '../ImageGallery';

const Cover = ({ title, description, gallery, thumb }) => {
  const Image = styled.div`
    flex: 0 0 66.66%;
    width: 66.66%;
  `
  const ImageGalleryPaths = R.map(src => ({
      original: require('../../static/' + src)
  }))

  const ImageWrapper = styled.div`
    flex: 0 0 66.66%;
    @media (max-width: 700px) {
      flex: 0 0 100%;
    } 
  `
  if (window.innerWidth < 700) return (
    <div className="flex flex-wrap py3 px2">
       <Link to={'article/' + title.split(' ').join('_')}>
        <h3 style={{ marginTop: '-11px' }}>{title}</h3>
      </Link>
      <ImageWrapper>
        { gallery && <ImageGallery items={ImageGalleryPaths(gallery)} style={{ width: '100%', height: '50vh' }} /> }
        { thumb && <Image role="presentation" src={thumb.src} />}
      </ImageWrapper> 
      <p className="mb0">{description}</p>
    </div>
  )
  return (
    <div className="flex py3 px1">
      <ImageWrapper>
        { gallery && <ImageGallery items={ImageGalleryPaths(gallery)} style={{ height: '70vh' }} /> }
        { thumb && <Image role="presentation" src={thumb.src} />}
      </ImageWrapper>
      <div className="pl3 border-box self-start">
        <Link to={'article/' + title.split(' ').join('_')}>
          <h3 style={{ marginTop: '-11px' }}>{title}</h3>
        </Link>
        <p className="mb0">{description}</p>
      </div>
    </div>
  );
}

export default Cover;
