import React from 'react';
import { shallow } from 'enzyme';
import WithLoading from '../../src/components/Loading/WithLoading';

describe('WithLoading', () => {
  it('should match snapshot', () => {
    const component = shallow(<WithLoading />);

    expect(component).toMatchSnapshot();
  });

  it('should render nested component', () => {
    const testComponent = 'Test';
    const ListWithLoading = WithLoading(testComponent);
    const component = shallow(<ListWithLoading />);

    expect(component).toMatchSnapshot();
  });

  it('should render loader', () => {
    const isLoading = true;
    const testComponent = 'Test';
    const ListWithLoading = WithLoading(testComponent);
    const component = shallow(<ListWithLoading isLoading={isLoading} />);

    expect(component).toMatchSnapshot();
  });

  it('should render error message', () => {
    const isLoading = false;
    const testComponent = 'Test';
    const ListWithLoading = WithLoading(testComponent);
    const component = shallow(<ListWithLoading errorMsg="Error!" isLoading={isLoading} />);

    expect(component).toMatchSnapshot();
  });

  it('should render error message when loading', () => {
    const isLoading = true;
    const testComponent = 'Test';
    const ListWithLoading = WithLoading(testComponent);
    const component = shallow(<ListWithLoading errorMsg="Error!" isLoading={isLoading} />);

    expect(component).toMatchSnapshot();
  });
});
