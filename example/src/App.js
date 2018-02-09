import React, { Component } from 'react'

import MyComponent from './MyComponent'

export default class App extends Component {
  render () {
    return (
      <div>
        <div>This component is ready and visible:</div>
        <MyComponent ready={true} />
        <div>This component is not ready, and not visible:</div>
        <MyComponent ready={false} />
      </div>
    )
  }
}
