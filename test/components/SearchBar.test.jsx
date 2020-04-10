import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../src/components/SearchBar/SearchBar';

describe('SearchBar', () => {
  it('should match snapshot', () => {
    const mockSearch = jest.fn();
    const component = shallow(<SearchBar search={mockSearch} />);

    expect(component).toMatchSnapshot();
  });
});
