import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

// import 'flexboxgrid/css/index.min.css';
import 'basscss/css/basscss.min.css'

import '../styles/index.css'
import '../styles/image-gallery.css'
import '../styles/app.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return <div>{children()}</div>
  }
}

export default Template
