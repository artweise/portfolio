import styled, { createGlobalStyle } from 'styled-components';

export const SPACING = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '16px',
  3.5: '24px',
  4: '32px',
  4.5: '48px',
  5: '64px',
  5.5: '96px',
  6: '128px',
  6.5: '236px',
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
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: #272835;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const MainContainer = styled.div`
  // max-width: 1440px; /* Max width for big screens */
  // margin: 0 auto;
  // padding: 0 20px;

  // @media (max-width: 1600px) {
  //   max-width: 90%;
  // }

  // @media (max-width: 768px) {
  //   max-width: 100%;
  //   padding: 0 10px;
  // }
`;

export const FlexContainer = styled.div`
  display: flex;
`;
//   body{
//     background-color: ${NEUTRAL_SHADES[50]};
//   }
