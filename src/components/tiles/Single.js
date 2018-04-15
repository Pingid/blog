import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Image = styled.img`
  max-height: 10rem;
  float: left;
`

export default ({ slug, size, title, image, description, date }) => {
  return (
    <Link to={slug}>
      <div className="" style={{ clear: 'both' }}>
        <h3 className="m0">{title}</h3>
        <h4 className="m0 py2 italic">{date}</h4>
        {image && <Image src={image} className="pr2 pb1" />}
        {description && (
          <p className="mt0">
            <span className="nowrap">{description.slice(0, 10)}</span>
            {description.slice(10, description.length)}
          </p>
        )}
      </div>
    </Link>
  )
}
