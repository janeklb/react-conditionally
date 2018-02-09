/**
 * @function conditionally
 */

import React, { PureComponent } from 'react';


export function conditionally(propsPredicate, WrappedComponent) {
  class Conditionally extends PureComponent {
    render() {
      if (propsPredicate(this.props)) {
        return <WrappedComponent {...this.props} />;
      }
      return null;
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
