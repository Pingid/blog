import React from 'react';
import styled from 'styled-components';
import ReactImageGallery from 'react-image-gallery';

const ImageGallery = ({ items, style }) => {
	const Item = styled.div`
		height: ${style.height};
		width: ${style.width};
		background-color: #f7f7f7;
	`
	const Image = styled.img`
		width: auto !important;
	`
	const NavIcon = styled.div`
		padding: .3rem;
    background: #f7f7f75;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  `
	const NavIconImage = styled.img`
	  width: 1.2rem;
	  cursor: pointer;
	  transition: .3s transform;
	  opacity: ${({ disabled }) => disabled ? 0 : .8 };
	  :hover {
	    transform: scale(1.1,1.1)
	  }
	`
	return (
	  <ReactImageGallery
	    showPlayButton={false} 
	    showThumbnails={false}
	    showFullscreenButton={false}
	    lazyLoad={true}
	    items={items}
	    renderItem={({ original }) => {
	    	return (
	    		<Item className="flex items-center justify-center">
	    			<Image src={original} />
	    		</Item>
	    	)
	    }}
	    renderLeftNav={(onClick, disabled) => {
	      return (
	        <NavIcon disabled={disabled} onClick={onClick} style={{ left: 0 }}>
	          <NavIconImage src={require('../static/icons/back.png')} />
	        </NavIcon>
	      )
	    }}
	    renderRightNav={(onClick, disabled) => {
	      return (
	        <NavIcon disabled={disabled} onClick={onClick} style={{ right: 0 }}>
	          <NavIconImage src={require('../static/icons/next.png')} />
	        </NavIcon>
	      )
	    }}
	  />
	)
}

export default ImageGallery;