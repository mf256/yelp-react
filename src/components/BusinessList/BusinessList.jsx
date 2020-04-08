import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import Loader from '../Loading/Loader';
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
    const { businesses, loadMore, hasMore } = this.props;

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<Loader key={0} />}
      >
        <StyledContainer>
          {businesses && businesses.map((b) => (<Business business={b} key={b.id} />))}
        </StyledContainer>
      </InfiniteScroll>
    );
  }
}

BusinessList.propTypes = {
  businesses: PropTypes.arrayOf(businessType),
  loadMore: PropTypes.func,
  hasMore: PropTypes.bool,
};

BusinessList.defaultProps = {
  businesses: [],
  loadMore: () => {},
  hasMore: true,
};

export default BusinessList;
