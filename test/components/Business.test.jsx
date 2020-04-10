import React from 'react';
import { shallow } from 'enzyme';
import Business from '../../src/components/Business/Business';
import { mockBusiness } from '../mock/mockData';

describe('Business', () => {
  it('should match snapshot', () => {
    const component = shallow(<Business business={mockBusiness} />);

    expect(component).toMatchSnapshot();
  });
});
