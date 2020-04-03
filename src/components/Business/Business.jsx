import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { mainColor } from '../GlobalStyles/GlobalStyles';

const itemSize = '20rem';

const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: ${itemSize};
    margin: 15px;
`;

const StyledImgItem = styled.figure`
    display: block;
    width:  ${itemSize};
    height: ${itemSize};
    margin: 0;
    overflow: hidden;
`;

const StyledImg = styled.img`
    display: block;
    max-width: inherit;
    max-height: inherit;
    width: 100%;
    height: ${itemSize};
    object-fit: cover;
    margin: 0;
`;

const StyledTitle = styled.h2`
  margin: 0;
  color: ${mainColor};
  font-size: 1.2rem;
`;

const StyledHeading = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  color: ${mainColor};
`;

const StyledInfo = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const StyledFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0;
`;

const StyledFlexRow = styled.div`
    width: inherit;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

class Business extends React.PureComponent {
  render() {
    const {
      business: {
        imageSrc, name, address, city, zipCode, category, rating, reviewCount,
      },
    } = this.props;

    return (
      <StyledItem className="Business">
        <StyledImgItem>
          <StyledImg src={imageSrc} alt={name} />
        </StyledImgItem>
        <StyledTitle>{name}</StyledTitle>
        <StyledFlexRow>
          <StyledFlexColumn>
            <StyledInfo>{address}</StyledInfo>
            <StyledInfo>{city}</StyledInfo>
            <StyledInfo>
              {city}
              &nbsp;
              {zipCode}
            </StyledInfo>
          </StyledFlexColumn>
          <StyledFlexColumn>
            <StyledHeading>{category}</StyledHeading>
            <StyledHeading>
              {rating}
              &nbsp;
              stars
            </StyledHeading>
            <StyledInfo>
              {reviewCount}
              &nbsp;
              reviews
            </StyledInfo>
          </StyledFlexColumn>
        </StyledFlexRow>
      </StyledItem>
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
