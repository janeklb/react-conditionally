import React, { PureComponent } from 'react';

export function conditionally(propsPredicate, WrappedComponent) {
  class Conditionally extends PureComponent {
    render() {
      return propsPredicate(this.props)
        ? React.createElement(WrappedComponent, this.props)
        : null;
    }
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  Conditionally.WrappedComponent = WrappedComponent;
  Conditionally.displayName = `conditionally(${wrappedComponentName})`;
  Conditionally.propTypes = WrappedComponent.propTypes;

  return Conditionally;
}
