/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import GridLoader from 'react-spinners/GridLoader';
import { mainColor } from '../GlobalStyles/GlobalStyles';

const StyledError = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin: 4rem auto;
  text-align: center;
  border: 5px dashed ${mainColor};
  border-radius: 4px;
  padding: 0.7rem 1.7rem;
  width: 50%;
`;

const StyledLoader = styled.div`
  margin: 4rem auto;
  width: 57px;
`;

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, errorMsg, ...props }) {
    if (errorMsg) {
      return (
        <StyledError>
          {errorMsg}
        </StyledError>
      );
    }

    if (isLoading) {
      return (
        <StyledLoader>
          <GridLoader
            color={mainColor}
            loading
          />
        </StyledLoader>
      );
    }

    return (<Component {...props} />);
  };
}

export default WithLoading;
