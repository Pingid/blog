import React from 'react';
import * as R from 'ramda';

const SideScroll = ({ className, style, children, width }) => (
  <div
    className={'flex overflow-auto touch-overflow ' + className}
    style={Object.assign({}, { overflowY: 'hidden' }, style)}>
    { children.map(R.assocPath(['props', 'style', 'flex'], `0 0 ${width || 'auto'}`)) }
  </div>
);

export default SideScroll;
