import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../src/components/NavBar/NavBar';

describe('NavBar', () => {
  it('should match snapshot', () => {
    const component = shallow(<NavBar />);

    expect(component).toMatchSnapshot();
  });
});
