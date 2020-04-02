import React from 'react';
import styled from 'styled-components';
import { mainColor } from '../GlobalStyles/GlobalStyles';

const StyledNavBar = styled.div`
  background-color: ${mainColor};
  padding: 5px;
  text-align: center;
  width: 100%;
`;

const StyledHeading = styled.h1`
  margin: 0;
  color: #ffffff;
`;

class NavBar extends React.PureComponent {
  render() {
    return (
      <StyledNavBar>
        <StyledHeading>
          Yelp in React
        </StyledHeading>
      </StyledNavBar>
    );
  }
}

export default NavBar;
