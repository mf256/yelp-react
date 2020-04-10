import React from 'react';
import { shallow } from 'enzyme';
import BusinessList from '../../src/components/BusinessList/BusinessList';
import { mockBusinessList } from '../mock/mockData';

describe('BusinessList', () => {
  it('should match snapshot', () => {
    const component = shallow(<BusinessList />);

    expect(component).toMatchSnapshot();
  });

  it('should render items', () => {
    const items = mockBusinessList;
    const hasMore = true;
    const component = shallow(
      <BusinessList
        businesses={items}
        loadMore={jest.fn}
        hasMore={hasMore}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it('should render last items', () => {
    const items = mockBusinessList;
    const hasMore = false;
    const component = shallow(
      <BusinessList
        businesses={items}
        loadMore={jest.fn}
        hasMore={hasMore}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
