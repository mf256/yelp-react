import React from 'react';
import { PropTypes } from 'prop-types';
import './BusinessList.css';
import Business, { businessType } from '../Business/Business';

class BusinessList extends React.PureComponent {
  render() {
    const { businesses } = this.props;
    return (
      <div className="BusinessList">
        {businesses && businesses.map((b) => (<Business business={b} key={b.id} />))}
      </div>
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
