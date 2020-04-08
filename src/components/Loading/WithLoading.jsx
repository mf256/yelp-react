/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { mainColor } from '../GlobalStyles/GlobalStyles';
import Loader from './Loader';

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
        <Loader />
      );
    }

    return (<Component {...props} />);
  };
}

export default WithLoading;
