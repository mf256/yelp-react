import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../../src/components/Loading/Loader';

describe('Loader', () => {
  it('should match snapshot', () => {
    const component = shallow(<Loader />);

    expect(component).toMatchSnapshot();
  });
});
