import React from 'react'
import styled from 'styled-components';
import classNames from 'classnames'

const A = props => (
  <a className="pr1" 
     style={{ color: 'grey', fontSize: '1rem' }} 
     {...props} />
);

const Wrapper = styled.div`
  padding-top: 1rem;
  padding-left: 3rem
  @media (max-width: 700px) {
    padding: 0rem 1.5rem;
  }
`

class Bio extends React.Component {
  render() {
    return (
      <Wrapper className="pb1 pl3">
        <div className="mt3 flex justify-between">
          <div>
            <h3 style={{ fontWeight: 700 }} className="m0 mb2">
              Dan Beaven
            </h3>
            <div className="flex">
              <A href="http://www.danbeaven.co.uk">Portfolio</A>
              <A>/</A>
              <A href="https://www.instagram.com/dansgotgrams/">instagram</A>
              <A> / </A>
              <A href="https://twitter.com/danmbeaven">twitter</A>
            </div>
            <p className="my2" style={{ maxWidth: '30rem' }}>
              This blog contains essays I have written during my (BA)
              Interaction Design Arts course at the London College of
              Communication.
            </p>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default Bio
