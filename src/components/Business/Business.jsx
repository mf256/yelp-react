import React from 'react';
import { PropTypes } from 'prop-types';

import './Business.css';

class Business extends React.PureComponent {
  render() {
    const {
      business: {
        imageSrc, name, address, city, zipCode, category, rating, reviewCount,
      },
    } = this.props;

    return (
      <div className="Business">
        <div className="image-container">
          <img src={imageSrc} alt={name} />
        </div>
        <h2>{name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{address}</p>
            <p>{city}</p>
            <p>
              {city}
              {' '}
              {zipCode}
            </p>
          </div>
          <div className="Business-reviews">
            <h3>{category}</h3>
            <h3 className="rating">
              {rating}
              {' '}
              stars
            </h3>
            <p>
              {reviewCount}
              {' '}
              reviews
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export const businessType = PropTypes.shape({
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
});

Business.propTypes = {
  business: businessType.isRequired,
};
export default Business;
