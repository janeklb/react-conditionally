import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { conditionally } from 'react-conditionally'

class MyComponent extends Component {
  render () {
    return (
      <div>
        Hi, i'm {this.props.ready ? 'Ready' : 'Not Ready'} to go.
      </div>
    )
  }
}

MyComponent.propTypes = {
  ready: PropTypes.bool.isRequired,
};

export default conditionally(
  ({ ready }) => ready === true,
  MyComponent
);
