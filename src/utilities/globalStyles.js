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

export const GRAY_SHADES = {
  50: '#ffffff',
  100: '#fafafa',
  200: '#f4f4f4',
  300: '#e0e0e0',
  400: '#cccccc',
  500: '#999999',
  600: '#777777',
  700: '#666666',
  800: '#4d4d4d',
  900: '#343434',
  1000: '#000000',
};

export const TEAL_SHADES = {
  50: '#eaf3f4',
  100: '#d9ebed',
  200: '#b7d7da',
  300: '#95c5c9',
  400: '#84bcc0',
  500: '#73b3b8',
  600: '#55a1a7',
  700: '#4e949a',
  800: '#3c6b70',
  900: '#27494c',
  1000: '#132425',
};

export const SLATE_SHADES = {
  50: '#f5f5f5', // light background, almost white
  100: '#dcdde3', // soft light gray with cool undertone
  200: '#b8bac8', // light slate
  300: '#9496ad', // medium gray with purple undertone
  400: '#6f7189', // saturated gray-purple
  500: '#4b4d68', // base color (main slate)
  600: '#3c3e55', // darker
  700: '#323349', // even deeper
  800: '#272835', // dark base
  900: '#1b1c29', // almost black with cool tint
  1000: '#0f0f16', // muted black with light blue undertone
};

export const SLATE_UTILS = {
  overlay: '#4b4d6835', // transparent layer based on slate-500
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

export const MainContainer = styled.div``;

export const FlexContainer = styled.div`
  display: flex;
`;
//   body{
//     background-color: ${NEUTRAL_SHADES[50]};
//   }
