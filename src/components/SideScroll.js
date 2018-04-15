import React from 'react'
import * as R from 'ramda'

const SideScroll = ({ className, style, children }) => (
  <div
    className={'flex overflow-auto touch-overflow ' + className}
    style={Object.assign({}, { overflowY: 'hidden' }, style)}
  >
    {children.map(node =>
      R.assocPath(
        ['props', 'style', 'flex'],
        R.path(['props', 'style', 'flex'], node) || `0 0 auto`,
        node
      )
    )}
  </div>
)

export default SideScroll
