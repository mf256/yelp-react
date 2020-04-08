import React from 'react';
import styled from 'styled-components';
import GridLoader from 'react-spinners/GridLoader';
import { mainColor } from '../GlobalStyles/GlobalStyles';

const StyledLoader = styled.div`
  margin: 4rem auto;
  width: 57px;
`;

class Loader extends React.PureComponent {
  render() {
    return (
      <StyledLoader>
        <GridLoader
          color={mainColor}
          loading
        />
      </StyledLoader>
    );
  }
}

export default Loader;
