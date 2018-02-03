import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactImageGallery from 'react-image-gallery';
import * as R from 'ramda';

const Cover = ({ title, description, gallery, thumb }) => {
  const Image = styled.div`
    flex: 0 0 66.66%;
    width: 66.66%;
  `

  const ImageGalleryPaths = R.map(src => {
    const path = require('../../static/' + src);
    return {
      original: path,
      thumbnail: path
    }
  })

  const ImageWrapper = styled.div`
    flex: 0 0 66.66%;
    max-height: 70vh;
  `
  const NavIcon = styled.div`
    height: 3rem;
    width: 2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  `
  const NavIconImage = styled.img`
    width: 1.2rem;
    cursor: pointer;
    transition: .3s transform;
    :hover {
      transform: scale(1.1,1.1)
    }
  `
  const ImageGallery = props => (
    <ReactImageGallery
      showPlayButton={false} 
      showThumbnails={false}
      showFullscreenButton={false}
      items={ImageGalleryPaths(gallery)}
      renderLeftNav={(onClick, disabled) => {
        return (
          <NavIcon disabled={disabled} onClick={onClick} style={{ left: 15 }}>
            <NavIconImage src={require('../../static/icons/back.png')} />
          </NavIcon>
        )
      }}
      renderRightNav={(onClick, disabled) => {
        return (
          <NavIcon disabled={disabled} onClick={onClick} style={{ right: 0 }}>
            <NavIconImage src={require('../../static/icons/next.png')} />
          </NavIcon>
        )
      }}
    />
  )

  return (
    <div className="flex py3 px1">
      <ImageWrapper>
        { gallery && <ImageGallery /> }
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
