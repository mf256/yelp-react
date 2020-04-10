import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/containers/App/App';

describe('App', () => {
  it('should match snapshot', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
