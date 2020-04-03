import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import Business, { businessType } from '../Business/Business';

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 4.4rem 10%;
`;

class BusinessList extends React.PureComponent {
  render() {
    const { businesses } = this.props;
    return (
      <StyledContainer>
        {businesses && businesses.map((b) => (<Business business={b} key={b.id} />))}
      </StyledContainer>
    );
  }
}

BusinessList.propTypes = {
  businesses: PropTypes.arrayOf(businessType),
};

BusinessList.defaultProps = {
  businesses: [],
};

export default BusinessList;
