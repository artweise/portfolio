import styled, { createGlobalStyle } from 'styled-components';

export const SPACING = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '16px',
  3.5: '24px',
  4: '32px',
  5: '64px',
  6: '128px',
  7: '256px',
  7.5: '384px',
  8: '512px',
  9: '1024px',
};

export const GlobalStyle = createGlobalStyle`
  *,
  * ::before,
  * ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: ${SPACING[3]}
  }

  a {
    text-decoration: none;
    color: black;
  }

  body {
    background-color: lightblue;
    height: 200vh;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
`;
//   body{
//     background-color: ${NEUTRAL_SHADES[50]};
//   }
