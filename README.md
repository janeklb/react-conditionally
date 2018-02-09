# react-conditionally

> HOC that provides a simple wrapper API for conditional rendering. It's [very simple](src/index.js).

[![NPM](https://img.shields.io/npm/v/react-conditionally.svg)](https://www.npmjs.com/package/react-conditionally)

## Install

```bash
npm install --save react-conditionally
```

## Usage

On it's own:
```jsx
// ConditionalMyComponent.js
import React from 'react'
import { conditionally } from 'react-conditionally'
import MyComponent from './MyComponent'

export default conditionally(
  props => !!props.data,
  MyComponent
)

```

Or with `react-redux`
```jsx
import { connect } from 'react-redux'
import { conditionally } from 'react-conditionally'
import MyComponent from './MyComponent'

const mapStateToProps = state => ({ data: state.data });

export default connect(mapStateToProps)(
  conditionally(
    props => !!props.data,
    MyComponent
  )
);
```

## License

MIT © [Janek Lasocki-Biczysko](https://github.com/janeklb)
