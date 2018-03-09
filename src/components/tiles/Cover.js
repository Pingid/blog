import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as R from 'ramda';
import moment from 'moment';

import { routeTitle } from '../../utils/utils';

import ImageGallery from '../ImageGallery';

const Cover = ({ title, description, gallery, thumbnail, date }) => {
  const Image = styled.img`
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
    <div className="flex flex-wrap py3 px3">
      <Link to={'article/' + routeTitle(title)}>
        <h3 className="mb0" style={{ marginTop: '-11px' }}>{title}</h3>
      </Link>
      <h4 className="m0 pt1 pb2 italic" style={{ width: '100%' }}>{moment(date, 'DD-MM-YYYY').format("D MMM YY")}</h4>
      <ImageWrapper>
        { gallery && <ImageGallery items={ImageGalleryPaths(gallery)} style={{ width: '100%', height: '50vh' }} /> }
        { thumbnail && <Image role="presentation" src={thumbnail} />}
      </ImageWrapper> 
      <p className="mb0">{description}</p>
    </div>
  )
  return (
    <div className="flex py3 px1">
      <ImageWrapper>
        { gallery && <ImageGallery items={ImageGalleryPaths(gallery)} style={{ height: '70vh' }} /> }
        { thumbnail && <Image role="presentation" src={thumbnail} />}
      </ImageWrapper>
      <div className="pl3 border-box self-start">
        <Link to={'article/' + title.split(' ').join('_')}>
          <h3 className="mb2" style={{ marginTop: '-11px' }}>{title}</h3>
        </Link>
        <h4 className="m0 mb2 italic">{moment(date, 'DD-MM-YYYY').format("D MMM YY")}</h4>
        <p className="mb0">{description}</p>
      </div>
    </div>
  );
}

export default Cover;
