import { createGlobalStyle } from 'styled-components';

export const mainColor = '#fa7d19';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&display=swap');

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: 'Noto Sans', sans-serif;
  }
`;
export default GlobalStyles;
