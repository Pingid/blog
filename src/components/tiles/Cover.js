import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import * as R from 'ramda'

import ImageGallery from '../ImageGallery'

const ImageWrapper = styled.div`
  flex: 0 0 66.66%;
  width: 100%;
  @media (max-width: 700px) {
    flex: 0 0 100%;
  }
`

const Cover = ({ slug, title, description, gallery, thumbnail, date }) => (
  <div>
    { /* LARGE VIEW */ }
    <div className="flex py3 px1 hide-md">
      <ImageWrapper>
        {gallery && <ImageGallery items={gallery} style={{ height: '70vh' }} />}
        {thumbnail && <img role="presentation" src={thumbnail} />}
      </ImageWrapper>
      <div className="pl3 border-box self-start">
        <Link to={slug}>
          <h3 className="mb2" style={{ marginTop: '-11px' }}>
            {title}
          </h3>
        </Link>
        <h4 className="m0 mb2 italic">{date}</h4>
        <p className="mb0">{description}</p>
      </div>
    </div>

    { /* SMALL VIEW */ }
    <div className="flex flex-wrap py3 px1 show-md">
      <Link to={slug}>
        <h3 className="mb0" style={{ marginTop: '-11px' }}>
          {title}
        </h3>
      </Link>
      <h4 className="m0 pt1 pb2 italic" style={{ width: '100%' }}>
        {date}
      </h4>
      <ImageWrapper>
        {gallery && (
          <ImageGallery
            items={gallery}
            style={{ width: '100%', height: '50vh' }}
          />
        )}
        {thumbnail && <img role="presentation" src={thumbnail} />}
      </ImageWrapper>
      <p className="mb0">{description}</p>
    </div>
  </div>
)

export default Cover
