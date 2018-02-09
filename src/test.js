import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { conditionally } from './'

// Setup
configure({ adapter: new Adapter() });

describe('conditionally', () => {
  it('renders WrappedComponent if predicate returns true', () => {
    const TestComponent = () => <div>I'm here</div>
    const ConditionalTestComponent = conditionally(
      props => props.dontRender !== true,
      TestComponent
    );

    const mounted = mount(<ConditionalTestComponent dontRender={false} />);
    expect(mounted.find(TestComponent)).toHaveLength(1);
  });

  it('does not render WrappedComponent if predicate returns true', () => {
    const TestComponent = () => <div>I'm here</div>
    const ConditionalTestComponent = conditionally(
      props => props.dontRender !== true,
      TestComponent
    );

    const mounted = mount(<ConditionalTestComponent dontRender={true} />);
    expect(mounted.find(TestComponent)).toHaveLength(0);
  });
});
